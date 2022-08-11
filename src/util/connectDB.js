const Sequelize = require('sequelize')

const sequelize = new Sequelize('micro_box', 'root', 'hoangtien', {
    host: 'localhost',
    dialect: 'mysql'
});



module.exports = sequelize;