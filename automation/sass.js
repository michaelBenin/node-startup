'use strict';

module.exports = {
  sass: {
    dist: {
      files: {
        'built/static/css/styles.css': 'browser/scss/styles.scss'
      },
      options: {
        sourceMap: true
      }
    }
  }
};
