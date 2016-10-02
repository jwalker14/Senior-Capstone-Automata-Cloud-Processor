var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://localhost:1883')

client.on('connect', function () {
	// console.log(client)
  client.subscribe('presence', {qos: 1})
})

client.on('message', function (topic, message, packet) {
  console.log(message.toString())
})