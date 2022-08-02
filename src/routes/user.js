const express =require('express');

const router = express.Router();

router.get('/register', (req, res, next) =>{
    res.send('<h1>register</h1>')
})

module.exports = router;