'use strict';

var linksController = require('../controllers/links_controller');

module.exports = function(router) {

  router.get('/links', linksController);

};
