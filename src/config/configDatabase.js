//Database
const sequelize = require('../util/connectDB')

const configDatabase = (req, res, next) => {
    sequelize
        .sync({ alter: true })
        .then(result => {
            // console.log(result)
            next()
        })
        .catch(error => {
            console.log(error)
        })
    next()
}

module.exports = configDatabase;