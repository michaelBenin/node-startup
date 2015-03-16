'use strict';

var express = require('express');
var router = express.Router();
var setRoutes = require('../util/router_util');
var path = require('path');
var globDir = path.join(__dirname, '../routes/**/*.js');

setRoutes(globDir, router);

module.exports = router;
