'use strict';

var config = require('../config/index');
var stateManager = require('../services/state_manager');
var router = require('../router/router');
var simpleView = require('../util/controller_util');
var searchView = require('../../../apps/search/search_view');

router.on('route:search', function () {
  simpleView(searchView);
});
