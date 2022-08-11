const jwt = require('jsonwebtoken')
require("dotenv").config()
function createAuth(req, res, next) {
    const authenTokenHeader = req.headers['authorization']
    const token = authenTokenHeader.split(' ')[1]
    if (!token) {
        res.status(401).json({
            message: "Access Token invalid!"
        })
    }
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, data) => {
        if (error) {
            res.status(401).json({
                message: "Access Token invalid!"
            })
        }
        else{
            res.status(200)
            next();
        }
    })
}

module.exports = createAuth;