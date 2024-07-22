const router = require('express').Router();

const requestsRoutes = require('./requestRoutes')

router.use('/request', requestsRoutes)

module.exports = router;
