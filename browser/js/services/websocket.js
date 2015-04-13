'use strict';

var config = require('../config');
var socket = require('engine.io-client')(config.WEBSOCKET);

socket.on('open', function() {
  //console.log('Client socket opened.');
  socket.on('message', function(data) {
    //  console.log(data);
  });
  socket.send('Client connection sending data');
  socket.on('close', function() {});
});

module.exports = socket;
