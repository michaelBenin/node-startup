'use strict';

var config = require('../config/index');
var stateManager = require('../services/state_manager');
var router = require('../router/router');
var simpleView = require('../util/controller_util');
var topicsView = require('../../../apps/topics/topics_view');

router.on('route:topics', function () {
  simpleView(topicsView);
});
