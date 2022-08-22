const express = require('express')

const router = express.Router()

const checkAuth = require("../middleware/authentication")

const controllerBoxIdDomain = require('../controller/controllerBoxIdDomain')

router.post('/create-boxid-domain', checkAuth, controllerBoxIdDomain.createBoxIdDomain)

router.get('/get-all-boxid-domain', controllerBoxIdDomain.getAllBoxIdDomain)

module.exports = router;