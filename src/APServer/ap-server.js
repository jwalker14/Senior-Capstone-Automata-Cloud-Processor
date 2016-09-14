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

//test these classes
var State = require("./classes/Vertex.js");
var Edge = require("./classes/Edge.js");

var s = new State(5)
var s = new State(6)
s.addNeighbor(new Edge(1,6,'functionName'))
s.addNeighbor(new Edge(1,7,'functionName2'))
s.addNeighbor(new Edge(1,6,'functionName2'))
s.addNeighbor(new Edge(1,7,'functionName22'))
s.addNeighbor(new Edge(1,6,'functionName3'))
s.addNeighbor(new Edge(1,8,'functionName25'))
s.addNeighbor(new Edge(1,6,'functionName7'))
s.addNeighbor(new Edge(1,7,'functionName2'))
s.addNeighbor(new Edge(1,6,'functionName'))
s.addNeighbor(new Edge(1,7,'functionName2'))
s.addNeighbor(new Edge(1,6,'functionName'))
s.addNeighbor(new Edge(1,7,'functionName2'))

console.log(s.getNeighbors().indexOfEdge('functionName2'))

// console.log(v.containsNeighbor(new Edge(1,'5','function name')))