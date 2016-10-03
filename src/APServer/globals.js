//LIBRARIES
Promise = require('promise');
crypto = require('crypto');
secret = "%0Bb-$sCJ+u2rq6r'3|sg#)j1?[dj/,82*%xXkH~QheJ2NvN%,W.\"Bal29DvLJP"
hash = crypto.createHmac('sha256', secret).update("drowssap").digest('hex')
hash2 = crypto.createHmac('sha256', secret).update("password").digest('hex')
console.log(hash, hash2)

// VARIOUS SETTINGS
settings = require('./config/settings.js')

// RESTFUL SERVICES
rest = require('express')();
RESTfulServices = require('http').Server(rest);

// DB STUFF
Mongoose = require('./classes/Mongoose.js')
mongoose = new Mongoose(settings)

// MODELS
User = require('./classes/User.js')