const bcrypt = require('bcrypt');
const saltRounds = 10;
require('dotenv').config();
const jwt = require('jsonwebtoken');
const User = require('../models/user')


exports.register = (req, res, next) => {
    let { name, email, phoneNumber, password } = req.body;
    let roleid = 1;
    bcrypt.hash(password, saltRounds)
        .then(function (hash) {
            return User.create({
                name: name,
                email: email,
                phoneNumber: phoneNumber,
                password: hash,
                roleid: roleid
            })
        }).then((result) => {
            res.status(200).json({
                message: "Register Success!!"
            })
        }).catch((error) => {
            res.status(400).json({
                message: "Password or email invalid!",
                error: error
            })
        })
    // res.status(200).json({
    //     message: "Register Success!!"
    // })
};

exports.login = async (req, res, next) => {
    let { email, password } = req.body;
    let idUser;
    User.findAll({
        where: {
            email: email
        }
    }).then((user) => {
        let hash = user[0].dataValues.password
        idUser = user[0].dataValues.id
        return bcrypt.compareSync(password, hash)
    }).then((result) => {
        if (result) {
            var token = jwt.sign({ idUser }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '2h' })
            res.status(200).json({
                message: 'Login success!',
                tokenAuth: token
            })
        } else {
            res.status(400).json('Password invalid!')
        }
    }).catch(() => {
        res.status(400).json({
            message: "Email invalid!"
        })
    })
}
