'use strict';

var grunt = require('grunt');

module.exports = {
  plato: {
    your_task: {
      options: {
        jshint: grunt.file.readJSON('.jshintrc')
      },
      files: {
        'built/js_reports/': '<%= jshint.files %>'
      }
    }
  }
};
