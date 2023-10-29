const dotenv = require('dotenv');
const log = require('./lib/logger.js');

const { NODE_ENV, TRAVIS_BRANCH, GITHUB_REF } = process.env;

if (NODE_ENV !== 'production') {
  dotenv.config({ silent: false });
}

const bucket = GITHUB_REF === 'refs/heads/master' ? 'app.tanachstudy.com' : 'beta.tanachstudy.com';
log.info('bucket to deploy to:', bucket);

module.exports = {
  siteMetadata: {
    title: 'Tanach Study',
    description: 'Tanach Study is a modern, web based platform for the study of the 24 books of'
    + 'Tanach',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Tanach Study',
        short_name: 'TS',
        description: 'Tanach Study is a modern, web based platform for the study of the 24 books of'
        + 'Tanach',
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
          'Material Icons',
          'Muli:400,700',
          'Thasadith:400,700',
        ],
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
