const express = require('express')

const router = express.Router()

const checkAuth = require("../middleware/authentication")

const controllerDomain = require('../controller/controllerDomain')

router.post('/createdomain', checkAuth, controllerDomain.createDomain)


module.exports = router;