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
  // Create pages.
  const { allMongodbTsNewPerakim } = data || {};
  const { nodes } = allMongodbTsNewPerakim || {};
  const rawData = nodes || [];
  //

  const torah = {};
  const nach = {};
  const mishna = {};

  for (let i = 0; i < rawData.length; i++) {
    const curr = rawData[i] || {};
    const { division, segment, section } = curr;
    switch (division) {
      case 'torah':
        if (!torah[section]) {
          torah[section] = torah[section] || [];
        }
        // section is the sefer
        torah[section].push(curr);
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
        break;
      case 'mishna':
        if (!mishna[segment]) {
          mishna[segment] = mishna[segment] || [];
        }
        // segment is the seder
        mishna[segment].push(curr);
        break;
      default:
        break;
    }
  }

  const torahTemplate = path.resolve('./src/templates/ParashaStudy/Sefarim/Sefarim.jsx');
  const nachTemplate = path.resolve('./src/templates/TanachStudy/Sefarim/Sefarim.jsx');
  const mishnaTemplate = path.resolve('./src/templates/MishnaStudy/Sefarim/Sefarim.jsx');

  Object.keys(torah).forEach((sefer) => {
    console.log('creating page', `/parasha-study/sefarim/${sefer}`)
    createPage({
      path: `/parasha-study/sefarim/${sefer}`,
      component: torahTemplate,
      context: {
        data: torah[sefer],
      },
    });
  });
};
