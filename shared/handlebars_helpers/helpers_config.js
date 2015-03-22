'use strict';

var slugify = require('cozy-slug');
var pluralize = require('pluralize');
var moment = require('moment');
var _ = require('lodash');

module.exports = function (Handlebars) {
  return {
    'slugify': function (data) {
      if (!data) {
        return 'Error: No arguments passed.';
      }
      return slugify(data);
    },
    'pluralize': function (data) {
      if (!data) {
        return 'Error: No arguments passed.';
      }
      return pluralize.plural(data);
    }
  };
};
