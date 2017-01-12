const router = require('express').Router();
const videoModel = require('../models/video.js');
const auth = require('../lib/auth.js');

function sendAsJSON(req, res, next) {
  res.json(res.data);
}

router.route('/')
  .get(videoModel.getAllVideos, sendAsJSON);

router.route('/:id')
  .get(videoModel.getOneVideo, sendAsJSON)
  .put(auth.authenticate, videoModel.updateVideo, sendAsJSON);

module.exports = router;
