const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const routes = require('./server/config/routes');

//****After running your build, uncomment this to launch the react fromtend with your node backend
// app.use(express.static(__dirname+ '/build'));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// Always return the main index.html, so react-router render the route in the client
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
// });

app.use(routes)

app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});
