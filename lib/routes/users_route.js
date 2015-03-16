'use strict';

var usersController = require('../controllers/users_controller');

module.exports = function (router) {

  router.get('/users', usersController);

};
