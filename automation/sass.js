'use strict';

module.exports = {
  sass: {
    dist: {
      files: {
        'built/static/css/styles.css': 'client/sass/styles.scss'
      },
      options: {
        sourceMap: true
      }
    }
  }
};
