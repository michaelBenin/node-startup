'use strict';

module.exports = {
  jshint: {
    files: [
      './*.js',
      'automation/**/*.js',
      'browser/**/*.js',
      'lib/**/*.js',
      'shared/**/*.js',
      'apps/**/*.js',
      'test/**/*.js'
    ],
    options: {
      reporter: require('jshint-stylish'),
      jshintrc: '.jshintrc'
    }
  }
};
