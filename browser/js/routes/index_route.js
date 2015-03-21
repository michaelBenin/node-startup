'use strict';

var router = require('../services/router');
var indexController = require('../controllers/index_controller');

router.on('route:index', indexController);
