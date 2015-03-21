'use strict';

var simpleView = require('../util/controller_util');
var indexView = require('../../../apps/home/home_view');

function indexController() {
  simpleView(indexView);
}

module.exports = indexController;
