var mosca = require('mosca');


//CLASS TO START THE MQTT SERVER
function Mosca(settings){
	this.ascoltatore.url = 'mongodb://' + settings.mongo.hostname + ":" + settings.mongo.port + '/mqtt'

	this.server.on('clientConnected', function(client) {
	    console.log('client connected', client.id);
	});

	// fired when a message is received
	this.server.on('published', function(packet, client) {
	  console.log('Published', packet);
	});

	this.server.on('ready', this.setup);
}


Mosca.prototype = {
	setup: function(){
		console.log('Mosca server is up and running');
	},

	ascoltatore: {
	  //using ascoltatore
	  type: 'mongo',
	  pubsubCollection: 'ascoltatori',
	  mongo: {}
	},

	settings: {
		post: 1883,
		backend: this.ascoltatore
	},

	server: new mosca.Server(this.settings)
}


module.exports = Mosca