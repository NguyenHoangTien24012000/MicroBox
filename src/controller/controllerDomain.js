const User = require('../models/user')
const Domain = require('../models/domain')


exports.createDomain = (req,res) =>{
    let { idUser } = req;

    let { name, value } = req.body;

    console.log("TEST" ,name, value)

    User.findAll({
        where: {
            id: idUser
        }
    }).then((user) => {
        if (user[0].dataValues.roleid === 0) {
            return Domain.create({
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