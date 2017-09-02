var express = require('express')
var routes = require('./route')
var bodyParser = require('body-parser')
var app = express();
var port = 3000;
app.listen(port, function(){
  console.log("Listening at port " + port);
});

app.use(bodyParser.urlencoded({extend : true}))
app.use('/',routes)
