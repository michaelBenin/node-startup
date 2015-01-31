'use strict';

var _ = require('underscore');
module.exports = function (grunt) {

  require('jit-grunt')(grunt, {
    express: 'grunt-express-server',
    scsslint: 'grunt-scss-lint',
    extract_sourcemap: 'grunt-extract-sourcemap'
  });

  require('time-grunt')(grunt);

  grunt.initConfig(require('./automation'));

  grunt.registerTask('default', [
    'prod'
  ]);

  grunt.registerTask('dev', [
    'clean:development',
    'concurrent:pre-dev',
    'concurrent:dev'
  ]);

  grunt.registerTask('prod', [
    'concurrent:prod',
    'cssmin',
    'extract_sourcemap',
    'uglify'
  ]);

  grunt.registerTask('dev-unit-test', [
    'htmlcompressor:pre_watch_unit_test',
    'concurrent:dev_unit_test'
  ]);

  grunt.registerTask('dev-test', [
    'jshint',
    'jsvalidate',
    'jsbeautifier:verify',
    'browserify:test',
    'browserify:modern',
    'mochaTest',
    'express:dev',
    'mocha',
    'webdriver',
    'express:dev:stop'
  ]);

  grunt.registerTask('browsertest', [
    'browserify:test',
    'express:dev',
    'mocha',
    'express:dev:stop'
  ]);

  grunt.registerTask('test', [
    'env:jenkins',
    'scsslint',
    'jshint',
    'jsvalidate',
    'jsbeautifier:verify',
    'browserify:test',
    'mochaTest',
    'prod',
    'express:dev',
    'mocha',
    'webdriver:chrome',
    'express:dev:stop'
  ]);

  grunt.registerTask('acceptance', [
    'env:jenkins',
    'express:dev',
    'webdriver:chrome',
    'express:dev:stop'
  ]);
};
