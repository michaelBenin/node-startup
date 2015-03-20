'use strict';

var config = require('../config/index');
var stateManager = require('../services/state_manager');
var router = require('../router/router');
var simpleView = require('../util/controller_util');
var aboutView = require('../../../apps/about/about_view');

router.on('route:about', function () {
  simpleView(aboutView);
});
