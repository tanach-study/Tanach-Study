const { getDB } = require('../lib/dbConnection.js');

function getAllSefarim(req, res, next) {
  getDB().then(db => {
    db.collection('sefarim')
    .find({}, { _id: 0 })
    .sort({ 'seferMeta.book_id': 1 })
    .toArray()
    .then(sefarim => {
      res.data = sefarim;
      next();
    })
    .catch(findErr => next(findErr));
  })
  .catch(dbErr => next(dbErr));
}

function getOneSefer(req, res, next) {
  const { sefer } = req.params;
  getDB().then(db => {
    db.collection('sefarim')
    .findOne({ 'seferMeta.book_name': sefer }, { _id: 0 })
    .then(data => {
      res.data = data;
      next();
    })
    .catch(findErr => next(findErr));
  })
  .catch(dbErr => next(dbErr));
}

module.exports = {
  getAllSefarim,
  getOneSefer,
};
