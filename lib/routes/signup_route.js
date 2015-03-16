'use strict';

var signupController = require('../controllers/signup_controller');

module.exports = function (router) {

  router.get('/sign-up', signupController);

};
