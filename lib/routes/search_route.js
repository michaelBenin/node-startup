'use strict';

var searchController = require('../controllers/search_controller');

module.exports = function(router) {

  router.get('/search', searchController);

};
