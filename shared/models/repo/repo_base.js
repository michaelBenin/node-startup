'use strict';

var Backbone = require('backbone');

var Repo = Backbone.Model.extend({
  urlRoot: 'https://api.github.com/repos/michaelBenin/node-startup'
});

module.exports = Repo;
