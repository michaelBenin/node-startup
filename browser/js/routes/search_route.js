'use strict';

var router = require('../services/router');
var searchController = require('../controllers/search_controller');

router.on('route:search', searchController);
