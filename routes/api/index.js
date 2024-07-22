const router = require('express').Router();

const favoriteRoutes = require('./favoriteRoutes')
const requestsRoutes = require('./requestRoutes')

router.use('/favorites', favoriteRoutes)
router.use('/request', requestsRoutes)

module.exports = router;
