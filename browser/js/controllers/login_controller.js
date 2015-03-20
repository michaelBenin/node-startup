'use strict';

var config = require('../config/index');
var stateManager = require('../services/state_manager');
var router = require('../router/router');
var simpleView = require('../util/controller_util');
var loginView = require('../../../apps/login/login_view');

router.on('route:login', function () {
  simpleView(loginView);
});
