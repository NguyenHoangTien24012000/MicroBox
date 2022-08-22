const express = require('express')

const router = express.Router()

const checkAuth = require("../middleware/authentication")

const controllerAlgorithms = require('../controller/controllerAlgorithms')

router.post('/create-algorithm', checkAuth, controllerAlgorithms.createAlgorithm)

router.get('/get-all-algorithm', checkAuth, controllerAlgorithms.getAllAlgorithm)

module.exports = router;