//servier dependencies
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

//set server port
var PORT = process.env.PORT || 3000;

var app = express();

//data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

//defines static asset directories for the server
app.use('/assets', express.static(path.join(__dirname, 'app/public/assets')));
app.use('/img', express.static(path.join(__dirname, 'img')));

require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

app.listen(PORT, function(){
  console.log('Listening on port' + PORT);
});