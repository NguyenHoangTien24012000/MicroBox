const db = require('../models/index')
const bcrypt = require('bcrypt');
const saltRounds = 10;
require('dotenv').config();
const jwt = require('jsonwebtoken');


exports.register = (req, res, next) => {
    let { name, email, phoneNumber, password } = req.body;
    let roleid = 0;

    bcrypt.hash(password, process.env.SALTROUNDS)
        .then((hash) => {
            return db.User.create({
                name: name,
                email: email,
                phoneNumber: phoneNumber,
                password: hash,
                roleid: roleid
            })
        })
        .then(() => {
            res.status(200).json({
                message: "Register Success!!"
            })
        })
        .catch((error => {
            res.status(400).json({
                message: "Password or email invalid!"
            })
        }))

};

exports.login = async (req, res, next) => {
    let { email, password } = req.body;
    console.log("email", email, password)
    let idUser;
    db.User.findAll({
        where: {
            email: email
        }
    }).then((user) => {
        console.log("user test", user)
        let hash = user[0].dataValues.password
        idUser = user[0].dataValues.id
        return bcrypt.compareSync(password, hash)
    }).then((result) => {
        if (result) {
            var token = jwt.sign({idUser}, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '120s' })
            res.status(200).json({
                message: 'Login success!',
                tokenAuth: token
            })
        } else {
            res.status(400).json('Password invalid!')
        }
    }).catch(() => {
        res.status(400).json({
            message : "Email invalid!"
        })
    })
}
