'use strict';

var testController = require('../controllers/test_controller');

module.exports = function (router) {

  router.get('/test', testController);

};
