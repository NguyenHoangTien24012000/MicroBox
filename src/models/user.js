const sequelize = require('../util/connectDB');

const Sequelize  = require('sequelize');


const User = sequelize.define('User', {
  // Model attributes are defined here
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER,
    unique: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  phoneNumber: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  roleid: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE
  }
});

module.exports = User
