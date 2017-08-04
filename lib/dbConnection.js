const MongoClient = require('mongodb');

function getDB() {
  return MongoClient.connect(process.env.DB_CONNECTION);
}

module.exports = {
  getDB,
};


// const pgp = require('pg-promise')();

// const config = {
//   host: 'localhost',
//   port: 5432,
//   user: 'dev',
//   password: 'dev',
//   database: 'tstest',
// };

// const db = pgp(config);

// module.exports = db;
