const db = require('../lib/dbConnection');
const tanach = require('../lib/tanach.json');

const getOnePerek = (req, res, next) => {
  const sefer = req.params.sefer;
  const perek = req.params.perek;
  const query = `
    SELECT
      teacher.long_bio AS teacher_bio,
      teacher.title AS teacher_title,
      teacher.fname AS teacher_fname,
      teacher.mname AS teacher_mname,
      teacher.lname AS teacher_lname,
      reader.bio AS reader_bio,
      reader.title AS reader_title,
      reader.fname AS reader_fname,
      reader.mname AS reader_mname,
      reader.lname AS reader_lname,
      part.part_id,
      part.name AS part_name,
      $1~.is_many_parts,
      $1~.parts_breakdown,
      $1~.perek_id,
      $1~.teacher_id,
      $1~.reader_id
    FROM $1~
    LEFT JOIN teacher
      ON ($1~.teacher_id = teacher.teacher_id)
    LEFT JOIN reader
      ON ($1~.reader_id = reader.reader_id)
    INNER JOIN part
      ON ($1~.part_id = part.part_id)
    WHERE $1~.perek_id = $2;`;
  const values = [sefer, perek];
  const hebArr = tanach[sefer].hebrew[perek - 1] || [];
  const engArr = tanach[sefer].english[perek - 1] || [];

  db.one(query, values)
  .then(data => {
    res.data = data;
    res.data.hebrew_text = hebArr;
    res.data.english_text = engArr;
  })
  .then(() => next())
  .catch(err => next(err));
}

module.exports = {
  getOnePerek,
}
