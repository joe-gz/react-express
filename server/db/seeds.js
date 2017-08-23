const DB = require("../db/connection");
const bcrypt = require('bcrypt-nodejs');
const SampleModel = DB.models.Sample;
const UserModel = DB.models.User;

UserModel.create({
  username: 'test@mail.com',
  password: bcrypt.hashSync('test123')
}).then(user => {
  // console.log('Seed created!', seed);
  SampleModel.create({
    text: 'sample 1',
    value: 10,
    userId: user.id
  }).then(seed => {
    console.log('Seed created!', seed);
  });

  SampleModel.create({
    text: 'sample 2',
    value: 11,
    userId: user.id
  }).then(seed => {
    console.log('Seed created!', seed);
  });
});
