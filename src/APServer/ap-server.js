//Restful API Setup

var rest = require('express')();
var RESTfulServices = require('http').Server(rest);


//Turn On RESTful services

rest.get('/', function(reqq, res){
	res.send("RESTful Services")
})

RESTfulServices.listen(3000, function(){
	console.log('listening on *:3000')
})

//SOCKET SERVER

var socket = require('express')();
var SocketServer = require('http').Server(socket);
var io = require('socket.io')(SocketServer);

socket.get('/', function(req, res){
	console.log('PING');
	res.send('GOTCHA');
})

io.on('connection', function(socket){
  console.log('a user connected');
});

SocketServer.listen(8000, function(){
	console.log("Socket Server Listening on *:8000")
})


//Setup AP
var AutomataProcessor = require('./AutomataProcessor/automata-processor.js');
var Graph = require("./classes/Graph.js");
var AP = new AutomataProcessor('Graph', 'something')
var g = new Graph("V", "E");
console.log(g.toString())
console.log(AP.compute())