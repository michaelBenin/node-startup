'use strict';

module.exports = {
  watch: {

    options: {
      livereload: true
    },

    js: {
      files: [
        'client/**/*.js',
        'apps/**/*.js',
        'shared/**/*.js',
        'apps/**/*.hbs',
        'shared/**/*.hbs'
      ],
      tasks: [
        'jsvalidate'
      ]
    },

    css: {
      files: [
        'browser/**/*.scss',
        'apps/**/*.scss'
      ],
      tasks: [
        'sass'
      ]
    },

    assets: {
      files: [
        'browser/media/*/**'
      ],
      tasks: [
        'copy'
      ]
    },

    refresh: {
      files: ['.rebooted']
    }
  }
};
