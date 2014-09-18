'use strict';
var _ = require('underscore');
var Backbone = require('backbone');
var routes = _.extend({},
  require('../../../shared/routes/router_config'),
  require('./client_routes')
);
var router = Backbone.Router.extend({
  routes: routes
});

module.exports = new router();
