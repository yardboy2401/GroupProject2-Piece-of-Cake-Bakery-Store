// require sequelize for database connection
const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

//setup for process.env and jawsdb on heroku deployment
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      //setup for remote hosting parameters and localhost parameters commented out for quick use
        // host: '24.19.103.57',
        // dialect: 'mysql',
        // port: 3306,
        // logging: false
      host: 'localhost',
      dialect: 'mysql',
      port: 3306,
      logging: false
    }
  );
}

//export sequelize module
module.exports = sequelize;
