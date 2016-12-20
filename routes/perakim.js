const router = require('express').Router();
const perekModel = require('../models/perek');

function sendAsJSON(req, res, next) {
  res.json(res.data);
}

router.route('/:sefer/:perek')
  .get(perekModel.getOnePerek, sendAsJSON);

module.exports = router;
