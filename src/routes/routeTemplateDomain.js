const express = require('express')

const router = express.Router()

const checkAuth = require("../middleware/authentication")

const controllerTemplateDomain = require('../controller/controllerTemplateDomain')

router.post('/create-template-domain', checkAuth, controllerTemplateDomain.createTemplateDomain)

router.get('/get-all-template-domain', controllerTemplateDomain.getAllTemplateDomain)

module.exports = router;