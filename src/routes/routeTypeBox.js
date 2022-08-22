const express = require('express')

const router = express.Router()

const checkAuth = require("../middleware/authentication")

const controllerTypeBox = require('../controller/controllerTypeBox')

router.post('/create-typebox', checkAuth, controllerTypeBox.createTypeBox)

router.get('/get-all-type', controllerTypeBox.getAllTypeBox)

module.exports = router;