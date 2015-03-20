'use strict';

var config = require('../config/index');
var stateManager = require('../services/state_manager');
var navView = require('../../../apps/nav/nav_view');
var footerView = require('../../../apps/footer/footer_view');

function simpleView(view) {
  return stateManager.stateManage([
    navView,
    footerView,
    view
  ]);
}

module.exports = simpleView;
