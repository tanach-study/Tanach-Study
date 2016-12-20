const db = require('../lib/dbConnection');

const getOnePerek = (req, res, next) => {
  const sefer = req.params.sefer;
  const perek = req.params.perek;
  const query = `SELECT * FROM $1~ LEFT JOIN teacher ON ($1~.teacher_id = teacher.teacher_id) WHERE $1~.perek_id = $2;`;
  const values = [sefer, perek];

  db.one(query, values)
  .then(data => res.data = data)
  .then(() => next())
  .catch(err => next(err));
}

module.exports = {
  getOnePerek,
}
