const Sequelize = require('sequelize');
const config = require('../config');
const sequelize = new Sequelize(config.db);

const User =  sequelize.define('user', {
  name: Sequelize.STRING,
});

module.exports = {sequelize, User};
