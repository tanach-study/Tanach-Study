const db = require('../lib/dbConnection.js');

const getAllVideos = (req, res, next) => {
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

const getOneVideo = (req, res, next) => {
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

module.exports = {
  getAllVideos,
  getOneVideo,
};
