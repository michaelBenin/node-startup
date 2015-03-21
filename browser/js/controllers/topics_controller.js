'use strict';

var simpleView = require('../util/controller_util');
var topicsView = require('../../../apps/topics/topics_view');

function topicsController() {
  simpleView(topicsView);
}

module.exports = topicsController;
