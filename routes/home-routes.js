const router = require('express').Router();

router.get('/', async (req, res) => {
    res.render('questionnaire');
  });
  module.exports = router;