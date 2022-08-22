const express = require('express')

const checkAuth = require("../middleware/authentication")

const router = express.Router()

const controllerRecommend = require('../controller/controllerRecommed')

router.post('/recommend/createbox', checkAuth, controllerRecommend.createBoxRecommend)

module.exports = router;