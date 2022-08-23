const Sequelize = require('sequelize');
require('dotenv').config()


const sequelize = new Sequelize(process.env.DATABASE, process.env.ROOT, process.env.PASSDATABASE, {
  dialect: 'mysql',
  host: process.env.HOST
});

module.exports = sequelize;