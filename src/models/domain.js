const sequelize = require('../util/connectDB');

const Sequelize  = require('sequelize');


const Domain = sequelize.define('Domain', {
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
  value:{
    type: Sequelize.STRING,
    allowNull: false,
  },
  idTypeBox:{
    type: Sequelize.INTEGER,
    allowNull: true,
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

module.exports = Domain
