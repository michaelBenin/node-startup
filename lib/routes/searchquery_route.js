'use strict';

var searchqueryController = require('../controllers/searchquery_controller');

module.exports = function(router) {

  router.get('/search', searchqueryController);

};
