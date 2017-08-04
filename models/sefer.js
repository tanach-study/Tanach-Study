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

function getAllSefarimNew(req, res, next) {
  getDB().then(db => {
    db.collection('sefarim')
  })
  .catch(dbErr => next(dbErr));
}

const getSeferMetadata = (req, res, next) => {
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
  WHERE book.name = $1;`;
  const values = [bookName];

  db.any(query, values)
  .then(data => res.seferMeta = data)
  .then(() => next())
  .catch(err => next(err));
}

const getAllTeachers = (req, res, next) => {
  const bookName = req.params.sefer;
  const query = `
  WITH this_book AS (
    SELECT * FROM book WHERE book.name = $1
  )
  SELECT *
  FROM teacher
  INNER JOIN book_teacher
    ON teacher.teacher_id = book_teacher.teacher_id
  WHERE book_teacher.book_id = (SELECT book_id FROM this_book);`;
  const values = [bookName];

  db.any(query, values)
  .then(data => res.seferTeachers = data)
  .then(() => next())
  .catch(err => next(err));
}

const getAllPerakim = (req, res, next) => {
  const bookName = req.params.sefer;
  const query = `
  SELECT *
  FROM $1~
  LEFT JOIN teacher
    ON ($1~.teacher_id = teacher.teacher_id);`;
  const values = [bookName];

  db.any(query, values)
  .then(data => res.allPerakim = data)
  .then(() => next())
  .catch(err => next(err));
}

const prepareSeferResponse = (req, res, next) => {
  res.data = {};
  res.data.seferMeta = res.seferMeta[0];
  res.data.seferTeachers = res.seferTeachers;
  res.data.allPerakim = res.allPerakim;
  next();
}

module.exports = {
  getAllSefarim,
  getSeferMetadata,
  getAllTeachers,
  getAllPerakim,
  prepareSeferResponse,
};
