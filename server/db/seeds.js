const DB = require("../db/connection");
const SampleModel = DB.models.Sample;
const UserModel = DB.models.User;

SampleModel.create({
  text: 'sample 1',
  value: 10
}).then(seed => {
  console.log('Seed created!', seed);
});

SampleModel.create({
  text: 'sample 2',
  value: 11
}).then(seed => {
  console.log('Seed created!', seed);
});

UserModel.create({
  username: 'sampleUser',
  password: 'Test123!'
}).then(seed => {
  console.log('Seed created!', seed);
});
