const path = require('path');
const fetch = require('node-fetch');
const log = require('./lib/logger.js');

const { API_URL } = process.env;

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

  log.info('fetching data');
  const data = await fetch(API_URL);
  log.info('data fetched, parsing');
  const jsonData = await data.json();
  log.info('parsed');

  const rawData = jsonData || [];

  rawData.forEach((obj, i) => {
    rawData[i].division_sequence = parseInt(obj.division_sequence, 10);
    rawData[i].segment_sequence = parseInt(obj.segment_sequence, 10);
    rawData[i].section_sequence = parseInt(obj.section_sequence, 10);
    rawData[i].unit_sequence = parseInt(obj.unit_sequence, 10);
    rawData[i].part_sequence = parseInt(obj.part_sequence, 10);
    rawData[i].series_sequence = parseInt(obj.series_sequence, 10);
    rawData[i].audio_url = obj.audio;
  });

  rawData.sort(rawPerakimComparator);

  const torah = {};
  const nach = {};
  const mishna = {};

  const parashot = {};
  const perakim = {};
  const masechtot = {};

  const parashotplus = {};

  const talmud = {};

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
      case 'tere_assar':
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
      case 'parasha':
        // section is the sefer
        // segment is the track
        if (!parashotplus[section]) {
          parashotplus[section] = {};
        }
        if (!parashotplus[section][segment]) {
          parashotplus[section][segment] = [];
        }
        parashotplus[section][segment].push(curr);
        break;
      case 'talmud':
        if (!talmud[segment]) {
          talmud[segment] = {};
        }
        if (!talmud[segment][section]) {
          talmud[segment][section] = {};
        }
        if (!talmud[segment][section][unit]) {
          talmud[segment][section][unit] = [];
        }
        // segment is the seder, section is the masechet, unit is the daf
        talmud[segment][section][unit].push(curr);
        break;
      default:
        break;
    }

    const { teacher_title: title } = curr;
    const { teacher_fname: fname } = curr;
    const { teacher_mname: mname } = curr;
    const { teacher_lname: lname } = curr;
    const teacherString = `${title}-${fname}-${mname}-${lname}`;
    if (teacherString !== 'a-b-c-d') {
      if (!teacherStrings.has(teacherString)) {
        teacherStrings.add(teacherString);
        const { teacher_short_bio: shortBio } = curr;
        const { teacher_long_bio: longBio } = curr;
        const { teacher_image_url: image } = curr;
        teachers.push({ title, fname, mname, lname, shortBio, longBio, image });
      }
    }
  }

  const torahSeferTemplate = path.resolve('./src/templates/ParashaStudy/Sefarim/Sefarim.jsx');
  const torahParashaTemplate = path.resolve('./src/templates/ParashaStudy/Perakim/Perakim.jsx');
  const nachSeferTemplate = path.resolve('./src/templates/TanachStudy/Sefarim/Sefarim.jsx');
  const nachPerekTemplate = path.resolve('./src/templates/TanachStudy/Perakim/Perakim.jsx');
  const mishMasechetTemplate = path.resolve('./src/templates/MishnaStudy/Masechtot/Masechtot.jsx');
  const mishPerekTemplate = path.resolve('./src/templates/MishnaStudy/Perakim/Perakim.jsx');
  const parashaSeferTemplate = path.resolve('./src/templates/ParashaStudyPlus/Sefarim/Sefarim.jsx');
  const talmudMasTemplate = path.resolve('./src/templates/TalmudStudy/Masechtot/Masechtot.jsx');
  const talmudDafTemplate = path.resolve('./src/templates/TalmudStudy/Dapim/Dapim.jsx');

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

  const nachKeys = Object.keys(nach);
  nachKeys.forEach((sefer, i) => {
    let nextSefer = '';
    let prevSefer = '';
    if (i < nachKeys.length - 1) {
      nextSefer = `/tanach-study/sefarim/${nachKeys[i + 1]}`;
    }
    if (i > 0) {
      prevSefer = `/tanach-study/sefarim/${nachKeys[i - 1]}`;
    }
    log.info('creating page', `/tanach-study/sefarim/${sefer}`);
    createPage({
      path: `/tanach-study/sefarim/${sefer}`,
      component: nachSeferTemplate,
      context: {
        data: nach[sefer],
        sefer,
        nextSefer,
        prevSefer,
      },
    });
    const pers = perakim[sefer];
    const persKeys = Object.keys(pers);
    persKeys.forEach((perek, j) => {
      let nextPerek = '';
      let prevPerek = '';
      if (j < persKeys.length - 1) {
        nextPerek = `/tanach-study/perakim/${sefer}/${persKeys[j + 1]}`;
      }
      if (j > 0) {
        prevPerek = `/tanach-study/perakim/${sefer}/${persKeys[j - 1]}`;
      }
      log.info('creating page', `/tanach-study/perakim/${sefer}/${perek}`);
      createPage({
        path: `/tanach-study/perakim/${sefer}/${perek}`,
        component: nachPerekTemplate,
        context: {
          data: pers[perek],
          sefer,
          perek,
          nextPerek,
          prevPerek,
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

  const parashaSefarim = Object.keys(parashotplus);
  parashaSefarim.forEach((sefer, i) => {
    const parashaTracks = Object.keys(parashotplus[sefer]);
    parashaTracks.forEach((track) => {
      let nextSefer = '';
      let prevSefer = '';
      if (i < parashotplus.length - 1) {
        nextSefer = `/parasha-plus-study/sefarim/${track}/${parashotplus[i + 1]}`;
      }
      if (i > 0) {
        prevSefer = `/parasha-plus-study/sefarim/${track}/${parashotplus[i - 1]}`;
      }
      log.info('creating page', `/parasha-plus-study/sefarim/${track}/${sefer}`);
      createPage({
        path: `/parasha-plus-study/sefarim/${track}/${sefer}`,
        component: parashaSeferTemplate,
        context: {
          data: parashotplus[sefer][track],
          sefer,
          track,
          nextSefer,
          prevSefer,
        },
      });
    });
  });

  const tms = Object.keys(talmud);
  tms.forEach((seder, i) => {
    const talmudMasechtot = Object.keys(talmud[seder]);
    talmudMasechtot.forEach((masechet, j) => {
      let nextMasechet = '';
      let prevMasechet = '';
      if (j < talmud[seder].length - 1) {
        nextMasechet = `/talmud-study/masechtot/${seder}/${talmud[i + 1]}`;
      }
      if (j > 0) {
        prevMasechet = `/parasha-plus-study/sefarim/${seder}/${parashotplus[i - 1]}`;
      }
      log.info('creating page', `/talmud-study/masechet/${seder}/${masechet}`);
      createPage({
        path: `/talmud-study/masechet/${seder}/${masechet}`,
        component: talmudMasTemplate,
        context: {
          data: talmud[seder][masechet],
          seder,
          masechet,
          nextMasechet,
          prevMasechet,
        },
      });

      // dapim is an object of daf -> []
      const dapim = talmud[seder][masechet];
      const dapimKeys = Object.keys(dapim);
      dapimKeys.forEach((daf, j) => {
        let nextDaf = '';
        let prevDaf = '';
        log.info('creating page', `/talmud-study/dapim/${seder}/${masechet}/${daf}`);
        if (j < dapimKeys.length - 1) {
          nextDaf = `/talmud-study/dapim/${seder}/${masechet}/${parseInt(daf, 10) + 1}`;
        }
        if (j > 0) {
          prevDaf = `/talmud-study/dapim/${seder}/${masechet}/${parseInt(daf, 10) - 1}`;
        }
        createPage({
          path: `/talmud-study/dapim/${seder}/${masechet}/${daf}`,
          component: talmudDafTemplate,
          context: {
            data: dapim[daf],
            nextDaf,
            prevDaf,
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
