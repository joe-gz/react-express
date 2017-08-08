const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres:///sequelize_test');

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

//****After running your build, uncomment this to launch the react fromtend with your node backend
// app.use(express.static(__dirname+ '/build'));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  console.log('app!!');
});
app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});
