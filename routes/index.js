const router = require('express').Router()
const HealthcheckRoutes = require('./healthcheck')
const OperationsRoutes = require('./operations')

router.use('/healthcheck', HealthcheckRoutes)
router.use('/api/v1/operations', OperationsRoutes)

module.exports = router
