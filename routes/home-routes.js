const router = require('express').Router();
const Favorites = require('../models/Favorites');

router.get('/', async (req, res) => {
    // const dishData = await Dish.findAll().catch((err) => {
    //   res.json(err);
    // });
    // const dishes = dishData.map((dish) => dish.get({ plain: true }));
    res.render('questionnaire', { first: "laxmi" });
  });
  module.exports = router;