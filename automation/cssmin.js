'use strict';

module.exports = {
  cssmin: {
    options: {
      report: 'min'
    },
    minify: {
      expand: true,
      cwd: 'built/static/css/',
      src: ['*'],
      dest: 'built/static/css/'
    }
  }
};
