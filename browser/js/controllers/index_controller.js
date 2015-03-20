'use strict';

var config = require('../config/index');
var stateManager = require('../services/state_manager');
var router = require('../router/router');
var simpleView = require('../util/controller_util');
var homeView = require('../../../apps/home/home_view');

router.on('route:index', function () {
  simpleView(homeView);
});
