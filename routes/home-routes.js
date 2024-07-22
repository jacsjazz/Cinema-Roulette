const router = require('express').Router();
const Favorites = require('../models/Favorites');

router.get('/', async (req, res) => {
    res.render('questionnaire');
  });
  module.exports = router;