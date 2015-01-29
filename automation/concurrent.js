'use strict';

module.exports = {

  concurrent: {

    options: {
      logConcurrentOutput: true
    },

    'pre-dev': {
      tasks: [
        'copy',
        'sass',
        'env:dev'
      ]
    },

    dev: {
      tasks: [
        'nodemon',
        'watch',
        'browserify:modern_dev',
        'node-inspector'
      ]
    },

    dev_unit_test: {
      tasks: [
        'nodemon',
        'watch',
        'browserify:watch_unit_test',
        'node-inspector'
      ]
    },

    prod: [
      'copy',
      'sass',
      'browserify:modern'
    ]
  }
};
