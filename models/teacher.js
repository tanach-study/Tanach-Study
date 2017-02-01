const db = require('../lib/dbConnection');

function getAllTeacehrs (req, res, next) {
  const query = `SELECT * FROM teacher;`;

  db.any(query)
  .then(data => res.data = data)
  .then(() => next())
  .catch(err => next(err));
}

function getOneTeacher (req, res, next) {
  const teacherID = req.params.id;
  const query = `SELECT * FROM teacher WHERE teacher.teacher_id = $1`;
  const values = [teacherID];

  db.oneOrNone(query, values)
  .then(data => res.data = data)
  .then(() => next())
  .catch(err => next(err));
}

module.exports = {
  getAllTeacehrs,
  getOneTeacher,
}
