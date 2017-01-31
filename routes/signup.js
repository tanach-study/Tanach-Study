const router = require('express').Router();

router.post('/', (req, res) => res.json('works!!'));

module.exports = router;
