'use strict';

var router = require('../services/router');
var loginController = require('../controllers/login_controller');

router.on('route:login', loginController);
