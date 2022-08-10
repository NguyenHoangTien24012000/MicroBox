const Sequelize = require('sequelize')

const sequelize = new Sequelize('micro_box', 'root', 'hoangtien14', {
    host: 'localhost',
    dialect: 'mysql'
});



module.exports = sequelize;