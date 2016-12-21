const db = require('../lib/dbConnection.js');

const getAllSefarim = (req, res, next) => {
  let query = `
  SELECT
    book.book_id AS book_id,
    book.name AS book_name,
    book.numchapters,
    book.part_id,
    part.name AS part_name
  FROM book
  INNER JOIN part
    ON book.part_id = part.part_id
  ORDER BY book.book_id ASC;`;

  db.any(query)
  .then(data => res.data = data)
  .then(() => next())
  .catch(err => next(err));

}

const getOneSefer = (req, res, next) => {
  const bookName = req.params.sefer;
  const query = `
  SELECT
    book.book_id AS book_id,
    book.name AS book_name,
    book.numchapters,
    book.part_id,
    part.name AS part_name
  FROM book
  INNER JOIN part
    ON book.part_id = part.part_id
  WHERE book.name = $1;

  SELECT *
  FROM $1~
  LEFT JOIN teacher
    ON ($1~.teacher_id = teacher.teacher_id);`;
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
