'use strict';

var config = require('../config/index');
var stateManager = require('../services/state_manager');
var router = require('../router/router');
var simpleView = require('../util/controller_util');
var signupView = require('../../../apps/signup/signup_view');

router.on('route:signup', function () {
  simpleView(signupView);
});
