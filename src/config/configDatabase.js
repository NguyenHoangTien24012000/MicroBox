//Database
const sequelize = require('../util/connectDB')

const configDatabase = (req, res, next) =>{
    sequelize
        .sync()
        .then(result => {
            // console.log(result)
            next()
        })
        .catch(error => {
            console.log(error)
        })
    console.log("test")
    next()
}

module.exports = configDatabase;