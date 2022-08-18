const jwt = require('jsonwebtoken')
require("dotenv").config()
function checkAuth(req, res, next) {
    const authenTokenHeader = req.headers['authorization']
    if (!authenTokenHeader) {
        res.status(401).json({
            message: "Access Token invalid!"
        })
    }
    const token = authenTokenHeader.split(' ')[1]
    if (!token) {
        res.status(401).json({
            message: "Access Token invalid!"
        })
    }
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, data) => {
        if (error) {
            res.status(401).json({
                message: "Access Token invalid!",
                error: error
            })
        }
        else {
            // res.json(data)
            req.idUser = data.idUser;
            next();
        }
    })
}

module.exports = checkAuth;