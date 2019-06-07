const path = require('path');

const { onCreateWebpackConfig } = require('./lib/webpack-config-fix.js');

exports.onCreateWebpackConfig = onCreateWebpackConfig;

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  // The “graphql” function allows us to run arbitrary
  // queries against the mongoDB graphql schema.

  // Mongodb{dbName}{collection} is a data node type created from mongoDB is a
  // "connection" (a GraphQL convention for accessing a list of nodes) gives
  // us an easy way to query all documents in the mongoDB collection.

  const { data } = await graphql(`
    {
      allMongodbTsNewPerakim {
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
          }
        }
      }
    }
  `);

  const { allMongodbTsNewPerakim } = data || {};
  const { nodes } = allMongodbTsNewPerakim || {};
  const rawData = nodes || [];

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
  const mishnaMasechetTemplate = path.resolve('./src/templates/MishnaStudy/Masechtot/Masechtot.jsx');
  const mishnaPerekTemplate = path.resolve('./src/templates/MishnaStudy/Perakim/Perakim.jsx');

  Object.keys(torah).forEach((sefer) => {
    console.log('creating page', `/parasha-study/sefarim/${sefer}`)
    createPage({
      path: `/parasha-study/sefarim/${sefer}`,
      component: torahSeferTemplate,
      context: {
        data: torah[sefer],
        sefer,
      },
    });
    const pars = parashot[sefer];
    Object.keys(pars).forEach((parasha) => {
      console.log('creating page', `/parasha-study/perakim/${sefer}/${parasha}`)
      createPage({
        path: `/parasha-study/perakim/${sefer}/${parasha}`,
        component: torahParashaTemplate,
        context: {
          data: pars[parasha],
          sefer,
          perek: parasha,
        },
      });
    });
  });

  Object.keys(nach).forEach((sefer) => {
    console.log('creating page', `/tanach-study/sefarim/${sefer}`)
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
      console.log('creating page', `/tanach-study/perakim/${sefer}/${perek}`)
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
    Object.keys(sederData).forEach((masechet) => {
      console.log('creating page', `/mishna-study/masechet/${seder}/${masechet}`)
      createPage({
        path: `/mishna-study/masechet/${seder}/${masechet}`,
        component: mishnaMasechetTemplate,
        context: {
          data: sederData[masechet],
          seder,
          masechet,
        },
      });
      const pers = masechtot[seder][masechet];
      Object.keys(pers).forEach((perek) => {
        console.log('creating page', `/mishna-study/perek/${seder}/${masechet}/${perek}`)
        createPage({
          path: `/mishna-study/perek/${seder}/${masechet}/${perek}`,
          component: mishnaPerekTemplate,
          context: {
            data: pers[perek],
          },
        });
      });
    });
  });
};
