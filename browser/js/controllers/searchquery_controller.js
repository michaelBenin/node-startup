'use strict';

var config = require('../config/index');
var stateManager = require('../services/state_manager');
var router = require('../router/router');
var simpleView = require('../util/controller_util');
var searchqueryView = require('../../../apps/searchquery/searchquery_view');

router.on('route:searchquery', function () {
  simpleView(searchqueryView);
});
