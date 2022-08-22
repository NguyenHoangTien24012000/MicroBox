const express =require('express');

const router = express.Router();

const configDatabase = require('../config/configDatabase')

router.get('/update-database', configDatabase)

module.exports = router;