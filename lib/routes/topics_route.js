'use strict';

var topicsController = require('../controllers/topics_controller');

module.exports = function(router) {

  router.get('/topics', topicsController);

};
