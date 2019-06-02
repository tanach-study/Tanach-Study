const path = require('path');
const fetch = require('node-fetch');

const sefarim = require('./sefarim.json');
const API_URL = 'https://api.tanachstudy.com';

function getSefer(sefer) {
  const { url } = sefer;
  return fetch(`${API_URL}${url}`);
}

function getAllSefarim() {
  const fetches = sefarim.map(getSefer);
  return Promise.all(fetches);
}

function createPages({ actions }) {
  const { createPage } = actions;

  getDB()
    .then((client) => {
      const db = client.db(process.env.DB_NAME);
      db.collection('newPerakim')
        .find({}, {
          _id: 0,
        })
        .toArray()
        .then((data) => {
          console.log(data);

          const pageTemplate = path.resolve('./src/templates/item.js');
          data.forEach((doc) => {
            createPage({
            //   // Each page is required to have a `path` as well
            //   // as a template component. The `context` is
            //   // optional but is often necessary so the template
            //   // can query data specific to each page.
              path: `/item/${doc.id}/`,
              component: pageTemplate,
              context: {
                id: doc.id,
              },
            });
          });
        })
        .catch(findErr => console.error(findErr));
    })
    .catch(dbErr => console.error(dbErr));
}

module.exports = {
  createPages,
};
