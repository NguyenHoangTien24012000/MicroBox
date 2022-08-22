const Algorithm = require('../models/algorithm')
const User = require('../models/user')

exports.createAlgorithm = (req, res) => {
    let { idUser } = req;

    let { name, idTypeBox } = req.body;

    User.findAll({
        where: {
            id: idUser
        }
    }).then((user) => {
        if (user[0].dataValues.roleid === 0) {
            return Algorithm.create({
                name: name,
                idTypeBox: idTypeBox
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


exports.getAllAlgorithm = (req, res) => {
    Algorithm.findAll()
        .then(result => {
            res.status(200).json({
                message: "Success!!",
                data : result
            })
        })
        .catch(error=>{
            res.status(400).json({
                message: "Failed!!",
                error : error
            })
        })
}