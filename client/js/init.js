'use strict';

var $ = require('jquery');
require('velocity-animate');
require('./util/animation').setupAnimation($);

var _ = require('underscore');

var Backbone = require('backbone');
Backbone.$ = $;
require('./service/sync_client');
require('backbone.touch');
Backbone.LocalStorage = require('backbone.localstorage');
require('../../shared/utils/util').backbone(Backbone);
require('backbone-relational');
require('backbone.epoxy');

var Handlebars = require('hbsfy/runtime');
require('../../shared/handlebars_helpers/client_helpers')(Handlebars);

var router = require('./router/router');
require('./router/router_handler')(router);

var stateManager = require('./core/state_manager');
var config = require('./config');
var websocket = require('./service/websocket');

stateManager.init();

var pushState = stateManager.historyFix().pushStateSupport;

$(function () {
  Backbone.history.start({
    root: '/',
    pushState: pushState,
    silent: false
  });
});
