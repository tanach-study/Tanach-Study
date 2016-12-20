const db = require('../lib/dbConnection.js');

const getAllSefarim = (req, res, next) => {
  let query = `SELECT * FROM book ORDER BY id ASC;`;

  db.any(query)
  .then(data => res.data = data)
  .then(() => next())
  .catch(err => next(err));

}

const getOneSefer = (req, res, next) => {
  const bookName = req.params.sefer;
  const query = `SELECT * FROM $1~;`;
  const values = [bookName];

  db.oneOrNone(query, values)
  .then(data => res.data = data)
  .then(() => next())
  .catch(err => next(err));
}

module.exports = {
  getAllSefarim,
  getOneSefer,
};
