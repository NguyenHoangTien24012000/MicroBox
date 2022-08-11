const express = require('express');

const router = express.Router();

const controllerTest = require('../controller/test')

router.post('/demo', controllerTest.development)

require('dotenv').config()

const createAuth = require("../middleware/authentication")

router.get('/token', createAuth ,controllerTest.testToken)

module.exports = router