const Sequelize = require("sequelize");
const dbConfig = require("../config/db.config.js");

const sequelize = new Sequelize(dbConfig.DATABASE, dbConfig.USER, dbConfig.PASSWORD, {
  dialect: 'postgres',
  host: dbConfig.HOST
});

async function dbConnection() {
  await sequelize.sync({force:false});
  console.log('DATABASE --> OK')
}

module.exports = {
  sequelize,
  dbConnection
}