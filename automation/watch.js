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
        'client/**/*.scss',
        'apps/**/*.scss'
      ],
      tasks: [
        'sass'
      ]
    },

    scripts: {
      files: [
        'server/views/partials/script_template/scripts_dev.hbs'
      ],
      tasks: [
        'htmlcompressor:development'
      ]
    },

    scripts_test: {
      files: [
        'server/views/partials/test/script_template/test_scripts_dev.hbs'
      ],
      tasks: [
        'htmlcompressor:pre_watch_unit_test'
      ]
    },

    assets: {
      files: [
        'client/assets/*'
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
