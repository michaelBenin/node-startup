'use strict';

var aboutController = require('../controllers/about_controller');

module.exports = function(router) {

  router.get('/about', aboutController);

};
