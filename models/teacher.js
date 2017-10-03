const { getDB } = require('../lib/dbConnection');

function getAllTeachers(req, res, next) {
  getDB().then(db => {
    db.collection('teachers')
    .find({}, { _id: 0 })
    .sort({ 'teacher_info.lname': 1 })
    .toArray()
    .then(teachers => {
      res.data = teachers;
      next();
    })
    .catch(findErr => next(findErr));
  })
  .catch(dbErr => next(dbErr));
}

function getOneTeacher(req, res, next) {
  const { id } = req.params;
  getDB().then(db => {
    db.collection('teachers')
    .findOne({ 'teacher_info.teacher_id': parseInt(id) }, { _id: 0 })
    .then(teacher => {
      res.data = teacher;
      next();
    })
    .catch(findErr => next(findErr));
  })
  .catch(dbErr => next(dbErr));
}

module.exports = {
  getAllTeachers,
  getOneTeacher,
}
