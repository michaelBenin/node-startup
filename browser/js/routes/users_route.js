'use strict';

var router = require('../services/router');
var usersController = require('../controllers/users_controller');

router.on('route:users', usersController);
