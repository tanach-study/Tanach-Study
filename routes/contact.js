const router = require('express').Router();
const gmailService = require('../services/gmail.js');

function sendAsJSON(req, res, next) {
  res.json(res.data);
}

router.route('/')
  .post(gmailService.getAuthObject, gmailService.generateEmailString, gmailService.sendEmail, sendAsJSON);

module.exports = router;
