const { onCreateWebpackConfig } = require('./lib/webpack-config-fix.js');

exports.onCreateWebpackConfig = onCreateWebpackConfig;

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
exports.createPages = ({ actions }) => {
  const { createPage } = actions
  // The “graphql” function allows us to run arbitrary
  // queries against the mongoDB graphql schema.

  // Mongodb{dbName}{collection} is a data node type created from mongoDB is a
  // "connection" (a GraphQL convention for accessing a list of nodes) gives
  // us an easy way to query all documents in the mongoDB collection.

  .then(data => console.log('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n have data\n', data))
  .catch(err => console.error('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n have error\n', err));
  // Create pages.
  const pageTemplate = path.resolve(`./src/templates/item.js`)
  // We want to create a detailed page for each
  // document in our mongoDB collection
    // Gatsby uses Redux to manage its internal state.
    // Plugins and sites can use functions like "createPage"
    // to interact with Gatsby.
    createPage({
    //   // Each page is required to have a `path` as well
    //   // as a template component. The `context` is
    //   // optional but is often necessary so the template
    //   // can query data specific to each page.
      path: `/item/${node.id}/`,
      component: pageTemplate,
      context: {
        id: node.id,
      },
    // })
}
