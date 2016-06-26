var express = require('express');
var app = express();
var cors = require('cors');
var port = 4000;
app.use(express.static(__dirname + '/public'));
/*app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});*/

app.listen(port,function() {
	console.log('Webserver has been started at the port: '+ port)
});