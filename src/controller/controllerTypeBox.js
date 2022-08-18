const User = require('../models/user')
const TypeBox = require('../models/typeBox')


exports.createTypeBox = (req, res) => {
    let { idUser } = req;

    let { name } = req.body;

    User.findAll({
        where: {
            id: idUser
        }
    }).then((user) => {
        if (user[0].dataValues.roleid === 0) {
            return TypeBox.create({
                name: name
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

