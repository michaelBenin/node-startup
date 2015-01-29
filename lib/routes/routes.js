'use strict';

var SETTINGS = require('../config/settings');
var _ = require('underscore');

module.exports = function (app) {

  app.get('/test', function (req, res, next) {
    res.render('test/test', {
      layout: 'layouts/test-layout'
    });
  });

  app.get(SETTINGS.OFFLINE_URL, function (req, res, next) {
    res.send(204);
  });

};
