'use strict';

var $ = window.$ = window.jQuery = require('jquery');
require('./../../browser_modules/foundation/js/foundation');
require('velocity-animate');
require('./util/animation').setupAnimation($);

var _ = require('underscore');

var Backbone = require('backbone');
Backbone.$ = $;
Backbone._ = _;
require('./services/sync_client');
require('backbone.touch');
Backbone.LocalStorage = require('backbone.localstorage');
require('../../shared/utils/util').backbone(Backbone);
require('backbone-relational');
require('backbone.epoxy');
var bulk = require('bulk-require');

var Handlebars = require('hbsfy/runtime');
require('./util/helpers')(Handlebars);

var router = require('./services/router');

bulk(__dirname, [
  './routes/*.js'
]);

var stateManager = require('./services/state_manager');
var config = require('./config/index');
var websocket = require('./services/websocket');

stateManager.init();

var pushState = stateManager.historyFix().pushStateSupport;

$(function () {
  $(document).foundation();
  Backbone.history.start({
    root: '/',
    pushState: pushState,
    silent: false
  });
});
