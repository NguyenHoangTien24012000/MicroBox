const Sequelize = require('sequelize');

const sequelize = new Sequelize('micro_box', 'root', '', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;