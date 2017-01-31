const router = require('express').Router();
const ccService = require('../services/constantcontact.js');

function sendAsJSON(req, res, next) {
  res.json(res.data);
}

router.post('/', ccService.validateData, ccService.checkIfEmailExists, ccService.registerEmail, sendAsJSON);

module.exports = router;
