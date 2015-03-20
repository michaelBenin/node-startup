'use strict';

var config = require('../config/index');
var stateManager = require('../services/state_manager');
var router = require('../router/router');
var simpleView = require('../util/controller_util');
var linksView = require('../../../apps/links/links_view');

router.on('route:links', function () {
  simpleView(linksView);
});
