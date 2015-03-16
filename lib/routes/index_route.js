'use strict';

var indexController = require('../controllers/index_controller');

module.exports = function (router) {

  router.get('/', indexController);

};
