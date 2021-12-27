const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const Users = require('../models/Users')
const conection = new Sequelize(dbConfig);
Users.init(conection)


module.exports = conection