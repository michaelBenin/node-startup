'use strict';

var router = require('../services/router');
var signupController = require('../controllers/signup_controller');

router.on('route:sign-up', signupController);
