'use strict';

module.exports = {
  jscs: {
    options: {
      preset: 'grunt'
    },
    files: [
      './*.js',
      'automation/**/*.js',
      'browser/**/*.js',
      'lib/**/*.js',
      'shared/**/*.js',
      'apps/**/*.js',
      'test/**/*.js'
    ]
  }
};
