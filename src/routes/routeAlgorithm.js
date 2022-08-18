const express = require('express')

const router = express.Router()

const checkAuth = require("../middleware/authentication")

const controllerAlgorithms = require('../controller/controllerAlgorithms')

router.post('/createAlgorithm', checkAuth, controllerAlgorithms.createAlgorithm)

module.exports = router;