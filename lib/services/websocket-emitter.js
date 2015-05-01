'use strict';

var settings = require('../config/settings');

var websocketEmitter = require('socket.io-emitter')({
  host: settings.redisHost,
  port: settings.redisPort
});

module.exports = websocketEmitter;
