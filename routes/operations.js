const router = require('express').Router()
const OperationsController = require('../controllers/operations-controller')

router.post('/multiply', OperationsController.multiply)

module.exports = router
