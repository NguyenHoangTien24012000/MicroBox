const TemplateDomain = require('../models/templateDomain')
const User = require('../models/user')

exports.createTemplateDomain = (req, res) => {
    let { idUser } = req;

    let { name, value } = req.body;

    User.findAll({
        where: {
            id: idUser
        }
    }).then((user) => {
        if (user[0].dataValues.roleid === 0) {
            return TemplateDomain.create({
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


exports.getAllTemplateDomain = (req,res) =>{
    TemplateDomain.findAll()
    .then(result=>{
        res.status(200).json({
            message : "Success!!",
            data : result
        })
    })
    .catch(error=>{
        res.status(400).json({
            message : "Failed!!",
            error : error
        })
    })

}