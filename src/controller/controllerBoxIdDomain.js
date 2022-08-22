const BoxIdDomain = require('../models/boxIdDomain')
const User = require('../models/user')

exports.createBoxIdDomain = (req, res) => {
    let { idUser } = req;

    let { name, value } = req.body;

    User.findAll({
        where: {
            id: idUser
        }
    }).then((user) => {
        if (user[0].dataValues.roleid === 0) {
            return BoxIdDomain.create({
                name: name,
                value: value
            })
        } else {
            return new Promise((resolve, reject) => {
                reject('You do not have access!')
            })
        }
    }).then(result => {
        res.status(200).json({
            message: "Success !!"
        })
    }).catch(error => {
        res.status(400).json({
            message: "Failed !!",
            error: error
        })
    })
}


exports.getAllBoxIdDomain = (req, res) => {
    BoxIdDomain.findAll()
        .then(result => {
            res.status(200).json({
                message: "Success!!",
                data: result
            })
        })
        .catch(error => ({
            message: "Success!!",
            error: error
        }))
}

