const dotenv = require('dotenv');

const { NODE_ENV, DB_CONNECTION, S3_BUCKET } = process.env;

if (NODE_ENV !== 'production') {
  dotenv.config({ silent: true });
}

const bucket = S3_BUCKET || NODE_ENV === 'production' ? 'tanachstudy.com' : 'beta.tanachstudy.com';

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
        start_url: '/',
        background_color: '#009fc1',
        theme_color: '#009fc1',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
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
        collection: 'newPerakim',
        dbName: 'ts-prod',
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
