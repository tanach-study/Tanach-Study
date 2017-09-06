const router = require('express').Router();
const userModel = require('../models/user.js');
const auth = require('../lib/auth.js');

function sendAsJSON(req, res, next) {
  res.json(res.data);
}

router.route('/login')
  .post(userModel.login, sendAsJSON);

router.route('/')
  .post(userModel.createUser, sendAsJSON);

module.exports = router;
