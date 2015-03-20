'use strict';

var config = require('../config/index');
var stateManager = require('../services/state_manager');
var router = require('../router/router');
var simpleView = require('../util/controller_util');
var usersView = require('../../../apps/users/users_view');

router.on('route:users', function () {
  simpleView(usersView);
});
