const router = require('express').Router();
const seferModel = require('../models/sefer');

function sendAsJSON(req, res, next) {
  res.json(res.data);
}

router.route('/')
  .get(seferModel.getAllSefarim, sendAsJSON);

router.route('/:sefer')
  .get(seferModel.getSeferMetadata, seferModel.getAllTeachers, seferModel.getAllPerakim, seferModel.prepareSeferResponse, sendAsJSON);

module.exports = router;
