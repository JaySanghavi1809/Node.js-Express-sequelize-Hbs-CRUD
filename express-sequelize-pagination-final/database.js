const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('loizenaidb', 'root', '', {
  dialect: 'mysql',
  host: 'localhost',
  pool:{max:5,min:0,idle:10000}
})

module.exports = sequelize;


