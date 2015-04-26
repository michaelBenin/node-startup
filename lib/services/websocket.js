'use strict';

var SETTINGS = require('../config/settings');
var engine = require('engine.io');
var websocket = engine.listen(SETTINGS.websocketPort);
module.exports = websocket;
