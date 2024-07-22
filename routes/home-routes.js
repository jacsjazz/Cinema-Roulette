const router = require('express').Router();

router.get('/', async (req, res) => {
    res.render('questionnaire');
  });
  module.exports = router;

  router.get('/favorites', async (req, res) => {
    res.render('favorites');
  });
  module.exports = router;