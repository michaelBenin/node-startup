'use strict';

var Backbone = require('backbone');

var Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'about': 'about',
    'links': 'links',
    'topics': 'topics',
    'users': 'users',
    'log-in': 'log-in',
    'sign-up': 'sign-up',
    'search': 'search',
    'search/:query': 'search-query'
  }
});

module.exports = new Router();
