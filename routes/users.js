const router = require('express').Router();
const userModel = require('../models/user.js');
const auth = require('../lib/auth.js');

function sendAsJSON(req, res, next) {
  res.json(res.data);
}

router.route('/login')
  .post(userModel.login, userModel.prepUserData, sendAsJSON);

router.route('/')
  .get(auth.authenticate, userModel.prepUserData, sendAsJSON)
  .post(userModel.createUser, userModel.prepUserData, sendAsJSON);

module.exports = router;
