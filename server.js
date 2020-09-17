var express = require('express')
var app = express()

var bodyParser = require('body-parser')

app.use(bodyParser.json());

var getHandler = require('./getserver')
var postHandler = require('./postserver')
var deleteHandler = require('./deleteserver')

app.get('/Get', getHandler.getHandlerG);

app.post('/Post', postHandler.postHandlerP);

app.delete('/Delete', deleteHandler.deleteHandlerD); 

//app.post('/Post', function (req, res) {
//  res.send('Hello World')
//})

//app.delete('/Delete', function (req, res) {
//app.delete('/Delete', function (req, res) {
//  res.send('Hello World')
//})

app.listen(3000)
console.log("Running");
