mqtt = require('mqtt')


/**
 * [Client description]
 * @param {[type]} ID [description]
 */
function Client(ID, JSON){
	//check with the server if this is a valid id
	//also needs some kind of authentication
	if(ID){
		this.id = ID
	}
	else{
		console.log("You have initialized the client without the ID")
	}
}

Client.prototype = {
	//this is the location of the MQTT server right now
	mqtt_options: {
	  clientId: 'mqttjs_' + Math.random().toString(16).substr(2, 8),
	  protocolId: 'MQTT',
	},
	mqtt_uri: 'ws://ws.zaphyrr.com:1884',
	/**
	 * Initializes the MQTT connection up with the presence and id topic subscribed to
	 * @return none
	 */
	init: function(){
		if(this.id){
			this.client = mqtt.connect(this.mqtt_uri, this.mqtt_options)
			var C = this.client

			console.log(this.client)

			//we have to assign the Client the function because of the scoped nature of Node that way we will have access to the function in the callbacks

			C.functions = this.functions

			C.on('connect', function () {
			  C.subscribe('presence')
			  C.publish('presence', 'Hello mqtt')
			})

			C.on('message', this.onMessage)
			//NOT SURE IF THIS WILL BE A SECURITY NIGHTMARE
			this.subscribe(this.id + "/#") //subscribe to all id channels
		}
		else{
			console.log('Please add an ID')
		}
	},
	/**
	 * subscribes the client to a channel
	 * @param  {string} topic the topic to be subscribed to
	 */
	subscribe: function(topic){
		this.client.subscribe(topic)
	},
	/**
	 * Publishes a message to the MQTT server for propogation
	 * @param  {string} topic   the topic to be published to
	 * @param  {string} message the message to be published
	 */
	publish: function(topic, message){
		this.client.publish(topic,message)
	},
	/**
	 * the callback function for MQTT on message
	 * @param  {string} topic   the topic of the message
	 * @param  {string} message the message byte string
	 */
	onMessage: function(topic, message, packet){
		var url_arr = topic.split('/')

		switch (url_arr[1]) {
			case 'transition':
				this.functions[url_arr[2]](message.toString())
				break;
			default:
				// statements_def
				break;
		}

		console.log(packet);
		this.publish('acks/' + url_arr[0], '1')

	}
}

//for browsers?
c = Client


//for node
module.exports = Client