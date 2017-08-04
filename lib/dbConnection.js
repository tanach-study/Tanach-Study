const pgp = require('pg-promise')();

const config = {
  host: 'localhost',
  port: 5432,
  user: 'dev',
  password: 'dev',
  database: 'tstest',
};

const db = pgp(config);

module.exports = db;


// const MongoClient = require('mongodb');

// // process.env.MONGOLAB_URI is DEPRECATED
// // process.env.MONGODB_URI is needed for when we deploy to Heroku
// const connectionURL = process.env.DB_CONNECTION;

// function getDB() {
//   return MongoClient.connect(connectionURL);
// }

// module.exports = {
//   getDB,
// };
