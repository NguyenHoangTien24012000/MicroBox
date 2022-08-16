const Product = require('../models/user')
const bcrypt = require('bcrypt');
const saltRounds = 10;
require('dotenv').config();
const jwt = require('jsonwebtoken');


exports.register = (req, res, next) => {
    let { name, email, phoneNumber, password } = req.body;
    let roleid = 0;
    console.log("{ name, email, phoneNumber, password }", { name, email, phoneNumber, password })
    bcrypt.hash(password, saltRounds).then(function (hash) {
        return db.User.create({
            name: name,
            email: email,
            phoneNumber: phoneNumber,
            password: hash,
            roleid: roleid
        })
    }).then((result) => {
        res.status(200).json({
            message: "Register Success!!",
            result: result
        })
    }).catch((error) => {
        res.status(400).json({
            message: "Password or email invalid!",
            error: error
        })
    })

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
            var token = jwt.sign({ idUser }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '120s' })
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


exports.getProducts = (req, res, next) => {
    Product.fetchAll()
      .then(([rows, fieldData]) => {
        // res.render('shop/product-list', {
        //   prods: rows,
        //   pageTitle: 'All Products',
        //   path: '/products'
        // });
      })
      .catch(err => console.log(err));
  };