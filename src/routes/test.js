const express = require('express');

const router = express.Router();

const controllerTest = require('../controller/test')

router.post('/demo', controllerTest.development)

require('dotenv').config()

const checkAuth = require("../middleware/authentication")

router.get('/token', checkAuth ,controllerTest.testToken)

module.exports = router