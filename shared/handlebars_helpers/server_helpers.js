'use strict';

var Handlebars = require('handlebars');
var _ = require('underscore');

module.exports = function (hbs) {
  var helpersConfig = require('./helpers_config')(hbs);

  for (var helper in helpersConfig) {
    if (helpersConfig.hasOwnProperty(helper)) {
      hbs.registerHelper(helper, helpersConfig[helper]);
    }
  }

  var blocks = {};

  hbs.registerHelper('extend', function (name, context) {
    var block = blocks[name];
    if (!block) {
      block = blocks[name] = [];
    }
    // for older versions of handlebars, use block.push(context(this));
    block.push(context.fn(this));
  });

  hbs.registerHelper('block', function (name) {
    var val = (blocks[name] || []).join('\n');

    // clear the block
    blocks[name] = [];
    return val;
  });

  hbs.registerHelper('data-context', function (context) {
    var data = _.omit(context, 'settings', 'config', '_locals', 'cache');
    data = JSON.stringify(data);
    return new Handlebars.SafeString(' data-context=\'' + data + '\'');
  });

  hbs.registerHelper('client-config', function (context) {
    var data = _.pick(context, 'config').config;
    data = JSON.stringify(data);
    return new Handlebars.SafeString(data);
  });

};
