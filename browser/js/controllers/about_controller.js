'use strict';

var simpleView = require('../util/controller_util');
var aboutView = require('../../../apps/about/about_view');

function aboutController() {
  simpleView(aboutView);
}

module.exports = aboutController;
