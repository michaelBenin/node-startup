'use strict';

module.exports = {
  scsslint: {
    allFiles: [
      'apps/**/*.scss',
      'browser/scss/**/*.scss'
    ],
    options: {
      config: 'node_modules/grunt-scss-lint/.scss-lint.yml'
    }
  }
};
