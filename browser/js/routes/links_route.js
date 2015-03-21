'use strict';

var router = require('../services/router');
var linksController = require('../controllers/links_controller');

router.on('route:links', linksController);
