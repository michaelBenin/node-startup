'use strict';

var simpleView = require('../util/controller_util');
var searchqueryView = require('../../../apps/searchquery/searchquery_view');

function searchqueryController() {
  simpleView(searchqueryView);
}

module.exports = searchqueryController;
