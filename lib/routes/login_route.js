'use strict';

var loginController = require('../controllers/login_controller');

module.exports = function (router) {

  router.get('/log-in', loginController);

};
