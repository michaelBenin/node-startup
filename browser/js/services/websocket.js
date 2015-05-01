'use strict';

var config = require('../config');
var socket = require('socket.io-client')(config.websocket);

socket.on('open', function() {
  //console.log('Client socket opened.');

  socket.on('message', function(data) {
    //  console.log(data);
  });

  socket.send('Client connection sending data');

  socket.on('close', function() {
    console.log('Socket Connection Closed.');
  });
});

module.exports = socket;
