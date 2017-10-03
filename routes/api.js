const router     = require('express').Router();
const seferModel = require('../models/sefer');
const perekModel = require('../models/perek');
const teacherModel = require('../models/teacher.js');

function sendAsJSON(req, res, next) {
  res.json(res.data);
}

router.route('/sefarim')
  .get(seferModel.getAllSefarim, sendAsJSON);

router.route('/sefarim/:sefer')
  .get(seferModel.getOneSefer, sendAsJSON);

router.route('/perakim/:sefer/:perek')
  .get(perekModel.getOnePerek, sendAsJSON);

router.route('/teachers')
  .get(teacherModel.getAllTeachers, sendAsJSON);

router.route('/teachers/:id')
  .get(teacherModel.getOneTeacher, sendAsJSON);

module.exports = router;
