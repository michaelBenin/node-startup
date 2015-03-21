'use strict';

var simpleView = require('../util/controller_util');
var searchView = require('../../../apps/search/search_view');

function searchController() {
  simpleView(searchView);
}

module.exports = searchController;
