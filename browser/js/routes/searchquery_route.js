'use strict';

var router = require('../services/router');
var searchqueryController = require('../controllers/searchquery_controller');

router.on('route:searchquery', searchqueryController);
