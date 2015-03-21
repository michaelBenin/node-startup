'use strict';

var router = require('../services/router');
var aboutController = require('../controllers/about_controller');

router.on('route:about', aboutController);
