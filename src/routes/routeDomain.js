const express = require('express')

const router = express.Router()

const checkAuth = require("../middleware/authentication")

const controllerDomain = require('../controller/controllerDomain')

router.post('/create-domain', checkAuth, controllerDomain.createDomain)

router.get('/get-all-domain', controllerDomain.getAllDomain)


module.exports = router;