'use strict';

module.exports = {
  jshint: {
    files: [
      './*.js',
      'automation/**/*.js',
      'client/**/*.js',
      '!client/js/lib/*',
      'server/**/*.js',
      'shared/**/*.js',
      'apps/**/*.js',
      'acceptance_test/**/*.js'
    ],
    options: {
      reporter: require('jshint-stylish'),
      jshintrc: '.jshintrc'
    }
  }
};
