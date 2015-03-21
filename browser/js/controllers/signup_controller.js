'use strict';

var simpleView = require('../util/controller_util');
var signupView = require('../../../apps/signup/signup_view');

function signupController() {
  simpleView(signupView);
}

module.exports = signupController;
