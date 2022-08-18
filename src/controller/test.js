const jwt = require('jsonwebtoken')
require('dotenv').config()

function authenToken(req, res, next){

}

exports.development = (req, res, next) =>{
    // console.log('req', req.body)
    var a = jwt.sign(req.body, process.env.ACCESS_TOKEN_SECRET,{ expiresIn: '60s' })
 
    res.status(200).json({a})

}


exports.testToken = (req, res, next) =>{
    // console.log(req)
    const {idUser} = req
    console.log("req", idUser)
    console.log("Test!!")
    res.status(200).json({
        message : "oki"
    })
}