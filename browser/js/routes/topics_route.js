'use strict';

var router = require('../services/router');
var topicsController = require('../controllers/topics_controller');

router.on('route:topics', topicsController);
