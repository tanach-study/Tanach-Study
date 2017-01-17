const db = require('../lib/dbConnection.js');

function getAllVideos (req, res, next) {
  let query = `
  SELECT
    *
  FROM video
  ORDER BY video.recording_date DESC;`;

  db.any(query)
  .then(data => res.data = data)
  .then(() => next())
  .catch(err => next(err));

}

function getOneVideo (req, res, next) {
  const videoID = req.params.id;
  const query = `
  SELECT
    *
  FROM video
  WHERE video.youtube_id = $1;`;

  const values = [videoID];

  db.any(query, values)
  .then(data => res.data = data)
  .then(() => next())
  .catch(err => next(err));
}

function updateVideo (req, res, next) {
  const videoID = req.params.id;
  const title = req.body.class_title;
  const sponsor = req.body.sponsor;
  const speaker = req.body.speaker;

  const query = `
  UPDATE video
  SET
    class_title = $2,
    sponsor = $3,
    speaker = $4
  WHERE video.youtube_id = $1;`;

  const values = [
    videoID,
    title,
    sponsor,
    speaker,
  ];

  db.none(query, values)
  .then(() => res.data = { status: 'updated successfully' })
  .then(() => next())
  .catch(err => next(err));
}

module.exports = {
  getAllVideos,
  getOneVideo,
  updateVideo,
};
