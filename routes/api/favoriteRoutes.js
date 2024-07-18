const router = require('express').Router();
const Favorites = require('../../models/Favorites');

// This route uses async/await with '.catch()' for errors
// and no HTTP status codes
router.get('/', async (req, res) => {
  const userData = await Favorites.findAll().catch((err) => {
    res.json(err);
  });
  res.json(userData);
});

module.exports = router;
