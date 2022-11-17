const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('backend_server', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false
});

const checkConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

module.exports = {
  checkConnection
}