'use strict';

var SETTINGS = require('../config/settings');
var engine = require('engine.io');
var websocket = engine.listen(SETTINGS.WEBSOCKET_PORT);
module.exports = websocket;
