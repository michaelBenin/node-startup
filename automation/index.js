'use strict';

var fs = require('fs');
var _ = require('underscore');

var config = {};
var files = fs.readdirSync(__dirname);
var index = files.indexOf('index.js');

files.splice(index, 1);

files.forEach(function (file) {
  _.extend(config, require('./' + file.split('.')[0]));
});

module.exports = config;
