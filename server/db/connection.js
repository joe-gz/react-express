const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres:///sequelize_test');
const Sample = sequelize.import('../models/samples');
const User = sequelize.import('../models/users');

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize,
  models: {
    Sample: Sample,
    User: User
  }
}
