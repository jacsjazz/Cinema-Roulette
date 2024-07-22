const router = require('express').Router();

const userRoutes = require('./userRoutes');
const favoriteRoutes = require('./favoriteRoutes')
const requestsRoutes = require('./requestRoutes')

router.use('/favorites', favoriteRoutes)
router.use('/request', requestsRoutes)
router.use('/users', userRoutes);

module.exports = router;
