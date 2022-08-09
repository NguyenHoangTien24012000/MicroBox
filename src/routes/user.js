const express =require('express');

const path = require('path')

const router = express.Router();

const rootDir = require('../util/path')

const controllerUser = require('../controller/user')

router.post('/register', controllerUser.register)

router.post('/login', controllerUser.login)

module.exports = router;