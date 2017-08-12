const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./server/config/routes');

//****After running your build, uncomment this to launch the react fromtend with your node backend
// app.use(express.static(__dirname+ '/build'));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  console.log('app!!');
});

app.use(routes)

app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});
