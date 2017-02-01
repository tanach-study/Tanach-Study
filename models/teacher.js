const db = require('../lib/dbConnection');

function getAllTeacehrs (req, res, next) {
  const query = `
  SELECT *
  FROM teacher ORDER BY teacher.lname ASC;`;

  db.any(query)
  .then(data => res.data = data)
  .then(() => next())
  .catch(err => next(err));
}

function getOneTeacher (req, res, next) {
  res.data = {};
  const teacherID = req.params.id;
  // `SELECT * FROM teacher WHERE teacher.teacher_id = $1`
  const query = `
  SELECT * FROM teacher WHERE teacher.teacher_id = $1`;
  const values = [teacherID];

  db.oneOrNone(query, values)
  .then(data => res.data.teacher_info = data)
  .then(() => next())
  .catch(err => next(err));
}

function getBooksTeacherTaught (req, res, next) {
  const teacherID = req.params.id;
  const query = `
  SELECT
    book.name AS book_name
  FROM teacher
  INNER JOIN book_teacher
    ON teacher.teacher_id = book_teacher.teacher_id
  INNER JOIN book
    ON book.book_id = book_teacher.book_id
  WHERE teacher.teacher_id = $1`;
  const values = [teacherID];

  db.any(query, values)
  .then(data => res.data.teacher_books = data)
  .then(() => next())
  .catch(err => next(err));
}

module.exports = {
  getAllTeacehrs,
  getOneTeacher,
  getBooksTeacherTaught,
}
