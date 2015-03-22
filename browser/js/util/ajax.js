'use strict';

var $ = require('jquery');
var Promise = require('bluebird');

module.exports = function(url, options) {
  return new Promise(function(resolve, reject) {

    var options = options || {};

    options.success = function(data) {
      resolve(data);
    };

    options.error = function(jqXHR, status, error) {
      reject(error);
    };

    $.ajax(url, options);
  });
};
