const dotenv = require('dotenv');

const { NODE_ENV, TRAVIS_BRANCH } = process.env;

if (NODE_ENV !== 'production') {
  dotenv.config({ silent: false });
}

const { DB_CONNECTION, DB_NAME, DB_COLLECTION } = process.env;

const bucket = TRAVIS_BRANCH === 'master' ? 'tanachstudy.com' : 'beta.tanachstudy.com';
console.log('bucket to deploy to:', bucket);

module.exports = {
  siteMetadata: {
    title: 'Tanach Study',
    description: 'Tanach Study is a modern, web based platform for the study of the 24 books of Tanach',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Tanach Study',
        short_name: 'TS',
        description: 'Tanach Study is a modern, web based platform for the study of the 24 books of Tanach',
        start_url: '/',
        background_color: '#009fc1',
        theme_color: '#009fc1',
        display: 'minimal-ui',
        icon: 'static/favicons/original-favicon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'material icons',
        ],
      },
    },
    {
      resolve: 'gatsby-source-mongodb',
      options: {
        connectionString: DB_CONNECTION,
        collection: DB_COLLECTION,
        dbName: DB_NAME,
      },
    },
    {
      resolve: 'gatsby-plugin-s3',
      options: {
        bucketName: bucket,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
