const sequelize = require('../util/connectDB');

const Sequelize  = require('sequelize');


const TypeBox = sequelize.define('typebox', {
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
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE
  }
});

module.exports = TypeBox
