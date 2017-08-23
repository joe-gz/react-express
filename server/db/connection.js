const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres:///sequelize_test');
const Sample = sequelize.import('../models/samples');
const User = sequelize.import('../models/user');

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  Sample.belongsTo(User);
  User.hasMany(Sample);

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize,
  models: {
    Sample: Sample,
    User: User
  }
}
