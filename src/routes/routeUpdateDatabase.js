const express =require('express');

const router = express.Router();

const configDatabase = require('../config/configDatabase')

router.get('/updatedatabase', configDatabase)

module.exports = router;