'use strict';

var bulk = require('bulk-require');

var controllers = bulk(__dirname, [
  './*.js'
]);

module.exports = controllers;
