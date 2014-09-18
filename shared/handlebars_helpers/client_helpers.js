'use strict';

module.exports = function (Handlebars) {
  var helpersConfig = require('./helpers_config')(Handlebars);
  for (var helper in helpersConfig) {
    if (helpersConfig.hasOwnProperty(helper)) {
      Handlebars.registerHelper(helper, helpersConfig[helper]);
    }
  }
  Handlebars.registerHelper('data-context', function () {
    return new Handlebars.SafeString(' data-context=\'' + 'Rendered from client' + '\'');
  });

};
