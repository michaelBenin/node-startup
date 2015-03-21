'use strict';

var simpleView = require('../util/controller_util');
var linksView = require('../../../apps/links/links_view');

function linksController() {
  simpleView(linksView);
}

module.exports = linksController;
