'use strict';

var SETTINGS = require('../config/settings');
var offlineController = require('../controllers/offline_controller');

module.exports = function(router) {

  router.get(SETTINGS.offlineUrl, offlineController);

};
