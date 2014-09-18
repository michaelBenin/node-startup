'use strict';

var config = require('../config');
// TODO: Setup via config
var socket = require('engine.io-client')('ws://localhost:3000');

socket.on('open', function () {
  //console.log('Client socket opened.');
  socket.on('message', function (data) {
    //  console.log(data);
  });
  socket.send('Client connection sending data');
  socket.on('close', function () {});
});

module.exports = socket;
