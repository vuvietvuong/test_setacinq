require('dotenv').config();
const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require('./config.json')[env];

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

const db = {};
 
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../model/user.model")(sequelize, Sequelize);
db.book = require("../model/book.model")(sequelize, Sequelize);

db.user.hasMany(db.book)
db.book.belongsTo(db.user)

module.exports = db;