const router = require('express').Router();
const teacherModel = require('../models/teacher.js');

function sendAsJSON(req, res, next) {
  res.json(res.data);
}

router.route('/')
  .get(teacherModel.getAllTeacehrs, sendAsJSON);

router.route('/:id')
  .get(teacherModel.getOneTeacher, sendAsJSON);

module.exports = router;
