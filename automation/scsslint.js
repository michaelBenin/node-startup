'use strict';

module.exports = {
  scsslint: {
    allFiles: [
      'apps/*/**.scss',
      'client/sass/*/**.scss'
    ],
    options: {
      config: 'node_modules/grunt-scss-lint/.scss-lint.yml'
    }
  }
};
