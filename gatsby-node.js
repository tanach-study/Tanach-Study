const path = require('path');
const log = require('./lib/logger.js');

const { GRAPHQL_SOURCE } = process.env;

const { onCreateWebpackConfig } = require('./lib/webpack-config-fix.js');

exports.onCreateWebpackConfig = onCreateWebpackConfig;

function teacherComparator(t1, t2) {
  if (t1.lname > t2.lname) {
    return 1;
  }

  if (t1.lname < t2.lname) {
    return -1;
  }

  if (t1.fname > t2.fname) {
    return 1;
  }

  if (t1.fname < t2.fname) {
    return -1;
  }

  if (t1.mname > t2.mname) {
    return 1;
  }

  if (t1.mname < t2.mname) {
    return -1;
  }

  return 0;
}

function rawPerakimComparator(a, b) {
  if (a.division_sequence < b.division_sequence) {
    return -1;
  }

  if (a.division_sequence > b.division_sequence) {
    return 1;
  }

  if (a.section_sequence < b.section_sequence) {
    return -1;
  }

  if (a.section_sequence > b.section_sequence) {
    return 1;
  }

  if (a.unit_sequence < b.unit_sequence) {
    return -1;
  }

  if (a.unit_sequence > b.unit_sequence) {
    return 1;
  }

  if (a.part_sequence < b.part_sequence) {
    return -1;
  }

  if (a.part_sequence > b.part_sequence) {
    return 1;
  }

  return 0;
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const { data } = await graphql(`
    {
      ${GRAPHQL_SOURCE} {
        nodes {
          division
          division_title
          division_sequence
          segment
          segment_name
          segment_title
          segment_sponsor
          segment_sequence
          section
          section_name
          section_title
          section_sponsor
          section_sequence
          unit
          unit_name
          unit_title
          unit_sponsor
          unit_sequence
          part
          part_name
          part_title
          part_sequence
          series
          series_title
          series_sequence
          start_chapter
          start_verse
          end_chapter
          end_verse
          audio_url {
            host
            path
          }
          teacher_title
          teacher_fname
          teacher_mname
          teacher_lname
          teacher_long_bio
          teacher_short_bio
          teacher_image_url
          teamim {
            reader_title
            reader_fname
            reader_mname
            reader_lname
            audio_url
          }
        }
      }
    }
  `);

  const queryResults = data[GRAPHQL_SOURCE];
  const { nodes } = queryResults || {};
  const rawData = nodes || [];

  rawData.sort(rawPerakimComparator);

  const torah = {};
  const nach = {};
  const mishna = {};

  const parashot = {};
  const perakim = {};
  const masechtot = {};

  const teachers = [];
  const teacherStrings = new Set();

  for (let i = 0; i < rawData.length; i++) {
    const curr = rawData[i] || {};
    const { division, segment, section, unit } = curr;
    switch (division) {
      case 'torah':
        // section is the sefer
        if (!torah[section]) {
          torah[section] = [];
        }
        torah[section].push(curr);

        // unit is the parasha
        if (!parashot[section]) {
          parashot[section] = {};
        }
        if (!parashot[section][unit]) {
          parashot[section][unit] = [];
        }
        parashot[section][unit].push(curr);
        break;
      case 'neviim_rishonim':
      case 'neviim_aharonim':
      case 'tere_asar':
      case 'ketuvim':
        if (!nach[section]) {
          nach[section] = nach[section] || [];
        }
        // section is the sefer
        nach[section].push(curr);

        // unit is the parasha
        if (!perakim[section]) {
          perakim[section] = {};
        }
        if (!perakim[section][unit]) {
          perakim[section][unit] = [];
        }
        perakim[section][unit].push(curr);
        break;
      case 'mishna':
        if (!mishna[segment]) {
          mishna[segment] = {};
        }
        if (!mishna[segment][section]) {
          mishna[segment][section] = [];
        }
        // segment is the seder, section is the masechet
        mishna[segment][section].push(curr);

        // unit is the perek
        if (!masechtot[segment]) {
          masechtot[segment] = {};
        }
        if (!masechtot[segment][section]) {
          masechtot[segment][section] = {};
        }
        if (!masechtot[segment][section][unit]) {
          masechtot[segment][section][unit] = [];
        }
        masechtot[segment][section][unit].push(curr);
        break;
      default:
        break;
    }

    const { teacher_title: title } = curr;
    const { teacher_fname: fname } = curr;
    const { teacher_mname: mname } = curr;
    const { teacher_lname: lname } = curr;
    const teacherString = `${title}-${fname}-${mname}-${lname}`;
    if (!teacherStrings.has(teacherString)) {
      teacherStrings.add(teacherString);
      const { teacher_short_bio: shortBio } = curr;
      const { teacher_long_bio: longBio } = curr;
      const { teacher_image_url: image } = curr;
      teachers.push({ title, fname, mname, lname, shortBio, longBio, image });
    }
  }

  const torahSeferTemplate = path.resolve('./src/templates/ParashaStudy/Sefarim/Sefarim.jsx');
  const torahParashaTemplate = path.resolve('./src/templates/ParashaStudy/Perakim/Perakim.jsx');
  const nachSeferTemplate = path.resolve('./src/templates/TanachStudy/Sefarim/Sefarim.jsx');
  const nachPerekTemplate = path.resolve('./src/templates/TanachStudy/Perakim/Perakim.jsx');
  const mishMasechetTemplate = path.resolve('./src/templates/MishnaStudy/Masechtot/Masechtot.jsx');
  const mishPerekTemplate = path.resolve('./src/templates/MishnaStudy/Perakim/Perakim.jsx');

  const torahSefarim = Object.keys(torah);
  torahSefarim.forEach((sefer, i) => {
    let nextSefer = '';
    let prevSefer = '';
    if (i < torahSefarim.length - 1) {
      nextSefer = `/parasha-study/sefarim/${torahSefarim[i + 1]}`;
    }
    if (i > 0) {
      prevSefer = `/parasha-study/sefarim/${torahSefarim[i - 1]}`;
    }
    log.info('creating page', `/parasha-study/sefarim/${sefer}`);
    createPage({
      path: `/parasha-study/sefarim/${sefer}`,
      component: torahSeferTemplate,
      context: {
        data: torah[sefer],
        sefer,
        nextSefer,
        prevSefer,
      },
    });
    const pars = parashot[sefer];
    const parsKeys = Object.keys(pars);
    parsKeys.forEach((parasha, j) => {
      let nextParasha = '';
      let prevParasha = '';
      if (j < parsKeys.length - 1) {
        nextParasha = `/parasha-study/perakim/${sefer}/${parsKeys[j + 1]}`;
      }
      if (j > 0) {
        prevParasha = `/parasha-study/perakim/${sefer}/${parsKeys[j - 1]}`;
      }
      log.info('creating page', `/parasha-study/perakim/${sefer}/${parasha}`);
      createPage({
        path: `/parasha-study/perakim/${sefer}/${parasha}`,
        component: torahParashaTemplate,
        context: {
          data: pars[parasha],
          sefer,
          perek: parasha,
          nextParasha,
          prevParasha,
        },
      });
    });
  });

  Object.keys(nach).forEach((sefer) => {
    log.info('creating page', `/tanach-study/sefarim/${sefer}`);
    createPage({
      path: `/tanach-study/sefarim/${sefer}`,
      component: nachSeferTemplate,
      context: {
        data: nach[sefer],
        sefer,
      },
    });
    const pers = perakim[sefer];
    Object.keys(pers).forEach((perek) => {
      log.info('creating page', `/tanach-study/perakim/${sefer}/${perek}`);
      createPage({
        path: `/tanach-study/perakim/${sefer}/${perek}`,
        component: nachPerekTemplate,
        context: {
          data: pers[perek],
          sefer,
          perek,
        },
      });
    });
  });

  Object.keys(mishna).forEach((seder) => {
    const sederData = mishna[seder];
    const masechetKeys = Object.keys(sederData);
    masechetKeys.forEach((masechet, i) => {
      let nextMasechet = '';
      let prevMasechet = '';
      if (i < masechetKeys.length - 1) {
        nextMasechet = `/mishna-study/masechet/${seder}/${masechetKeys[i + 1]}`;
      }
      if (i > 0) {
        prevMasechet = `/mishna-study/masechet/${seder}/${masechetKeys[i - 1]}`;
      }
      log.info('creating page', `/mishna-study/masechet/${seder}/${masechet}`);
      createPage({
        path: `/mishna-study/masechet/${seder}/${masechet}`,
        component: mishMasechetTemplate,
        context: {
          data: sederData[masechet],
          seder,
          masechet,
          nextMasechet,
          prevMasechet,
        },
      });
      const pers = masechtot[seder][masechet];
      const persKeys = Object.keys(pers);
      persKeys.forEach((perek, j) => {
        let nextPerek = '';
        let prevPerek = '';
        if (j < persKeys.length - 1) {
          nextPerek = `/mishna-study/perek/${seder}/${masechet}/${persKeys[j + 1]}`;
        }
        if (j > 0) {
          prevPerek = `/mishna-study/perek/${seder}/${masechet}/${persKeys[j - 1]}`;
        }
        log.info('creating page', `/mishna-study/perek/${seder}/${masechet}/${perek}`);
        createPage({
          path: `/mishna-study/perek/${seder}/${masechet}/${perek}`,
          component: mishPerekTemplate,
          context: {
            data: pers[perek],
            nextPerek,
            prevPerek,
          },
        });
      });
    });
  });

  const teachersTemplate = path.resolve('./src/templates/Teachers/AllTeachers.jsx');
  const teacherTemplate = path.resolve('./src/templates/Teachers/Teacher.jsx');
  const filteredTeachers = teachers.filter(t => t.title && t.fname && t.lname);
  filteredTeachers.sort(teacherComparator);
  log.info('creating page', '/teachers');
  createPage({
    path: '/teachers',
    component: teachersTemplate,
    context: {
      teachers: filteredTeachers,
    },
  });
  filteredTeachers.forEach((teacher) => {
    const { title, fname, mname, lname } = teacher;
    const slug = mname ? `${title}-${fname}-${mname}-${lname}` : `${title}-${fname}-${lname}`;
    const teacherSlug = slug.replace(/\./g, '').toLowerCase();
    log.info('creating page', `/teachers/${teacherSlug}`);
    createPage({
      path: `/teachers/${teacherSlug}`,
      component: teacherTemplate,
      context: {
        teacher,
      },
    });
  });
};
