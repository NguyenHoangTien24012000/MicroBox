const Sequelize = require('sequelize');
require('dotenv').config()


const sequelize = new Sequelize(process.env.DATABASE, process.env.ROOT, process.env.PASSDATABASE, {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;