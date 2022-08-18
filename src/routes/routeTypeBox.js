const express = require('express')

const router = express.Router()

const checkAuth = require("../middleware/authentication")

const controllerTypeBox = require('../controller/controllerTypeBox')

router.post('/createtypebox', checkAuth, controllerTypeBox.createTypeBox)

module.exports = router;