'use strict';

var settings = require('../config/settings');
var redis = require('socket.io-redis');
var io = require('socket.io')(settings.websocketPort);
io.adapter(redis({
  host: settings.redisHost,
  port: settings.redisPort
}));

module.exports = io;
