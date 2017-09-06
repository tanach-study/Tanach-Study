const { getDB } = require('../lib/dbConnection');
const tanach = require('../lib/tanach.json');

function getOnePerek (req, res, next) {
  const { sefer, perek } = req.params;
  getDB().then(db => {
    db.collection('perakim')
    .findOne({
      book_name: sefer,
      perek_id: parseInt(perek),
    }, {
      _id: 0,
    })
    .then(data => {
      res.data = data;
      next();
    })
    .catch(findErr => next(findErr));
  })
  .catch(dbErr => next(dbErr));
}

module.exports = {
  getOnePerek,
}
