const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'db.development.sqlite'
});

const User =  sequelize.define('user', {
  name: Sequelize.STRING,
});

module.exports = {sequelize, User};
