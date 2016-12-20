const db = require('../lib/dbConnection.js');

const getAllSefarim = (req, res, next) => {
  let query = `SELECT * FROM book ORDER BY book_id ASC;`;

  db.any(query)
  .then(data => res.data = data)
  .then(() => next())
  .catch(err => next(err));

}

const getOneSefer = (req, res, next) => {
  const bookName = req.params.sefer;
  const query = `SELECT * FROM $1~ LEFT JOIN teacher ON ($1~.teacher_id = teacher.teacher_id);`;
  const values = [bookName];

  db.any(query, values)
  .then(data => res.data = data)
  .then(() => next())
  .catch(err => next(err));
}

module.exports = {
  getAllSefarim,
  getOneSefer,
};
