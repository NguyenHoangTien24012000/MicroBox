const express = require('express');

const router = express.Router();

const controllerTest = require('../controller/test')

router.get('/demo/:idtest', controllerTest.development)

module.exports = router