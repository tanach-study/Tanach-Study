const MongoClient = require('mongodb');

function getDB() {
  return MongoClient.connect(process.env.DB_CONNECTION);
}

module.exports = {
  getDB,
};
