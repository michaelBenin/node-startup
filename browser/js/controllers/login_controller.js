'use strict';

var simpleView = require('../util/controller_util');
var loginView = require('../../../apps/login/login_view');

function loginController() {
  simpleView(loginView);
}

module.exports = loginController;
