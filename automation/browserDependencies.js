'use strict';

var grunt = require('grunt');

module.exports = {
  browserDependencies: grunt.file.readJSON('package.json').browserDependencies
};
