const { MongoClient } = require('mongodb');
require('dotenv').config({ silent: true, path: '../.env' });

function getDB() {
  return MongoClient.connect(process.env.DB_CONNECTION);
}

module.exports = {
  getDB,
};
