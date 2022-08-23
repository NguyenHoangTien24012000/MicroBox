const sequelize = require('../util/connectDB');

const Sequelize = require('sequelize');


const Recommend = sequelize.define('recommend', {
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
  idUser: {
    allowNull: false,
    type: Sequelize.INTEGER
  },
  idTypeBox: {
    allowNull: true,
    type: Sequelize.INTEGER
  },
  idDomain: {
    allowNull: true,
    type: Sequelize.INTEGER
  },
  idAlgorithm: {
    allowNull: true,
    type: Sequelize.INTEGER
  },
  layout: {
    allowNull: false,
    type: Sequelize.STRING
  },
  item: {
    allowNull: false,
    type: Sequelize.STRING
  },
  css: {
    allowNull: false,
    type: Sequelize.STRING
  },
  javascript: {
    allowNull: true,
    type: Sequelize.STRING
  },
  idBoxView: {
    allowNull: false,
    type: Sequelize.STRING
  },
  offSetPage: {
    allowNull: true,
    type: Sequelize.INTEGER
  },
  numberPage: {
    allowNull: true,
    type: Sequelize.INTEGER
  },
  idTemplateDomain: {
    allowNull: true,
    type: Sequelize.INTEGER
  },
  idBoxidDomain: {
    allowNull: true,
    type: Sequelize.INTEGER
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE
  },

});

module.exports = Recommend
