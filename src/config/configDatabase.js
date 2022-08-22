//Database
const sequelize = require('../util/connectDB');
const Algorithm = require('../models/algorithm');
const BoxIdDomain = require('../models/boxIdDomain');
const Domain = require('../models/domain');
const Recommend = require('../models/recommend');
const TemplateDomain = require('../models/templateDomain');
const TypeBox = require('../models/typeBox');
const User = require('../models/user');
const configDatabase = async (req, res, next) => {
    try {
        await Algorithm.sync();
        await BoxIdDomain.sync();
        await Domain.sync();
        await Recommend.sync();
        await TemplateDomain.sync();
        await TypeBox.sync();
        await User.sync();
        await sequelize.sync({ alter: true })
        res.status(200).json({
            message : "Update database success!!",
        })
    } catch (error) {
        res.status(400).json({
            message : "Update database failed!!",
            error : error
        })
    }
    // sequelize
    //     .sync()
    //     .then(result => {
    //         // console.log(result)
          
    //     })
    //     .catch(error => {
           
    //     })
}

module.exports = configDatabase;