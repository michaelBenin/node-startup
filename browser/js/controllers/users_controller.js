'use strict';

var simpleView = require('../util/controller_util');
var usersView = require('../../../apps/users/users_view');

function usersController() {
  simpleView(usersView);
}

module.exports = usersController;
