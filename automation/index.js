'use strict';

var fs = require('fs');
var _ = require('lodash');

var config = {};
var files = fs.readdirSync(__dirname);

[
  'utils',
  'index.js'
].forEach(function(path) {
  var index = files.indexOf(path);
  files.splice(index, 1);
});

files.forEach(function(file) {
  _.extend(config, require('./' + file.split('.')[0]));
});

module.exports = config;
