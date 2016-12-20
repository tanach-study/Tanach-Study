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
