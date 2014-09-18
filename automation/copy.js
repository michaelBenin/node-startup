'use strict';

module.exports = {

  copy: {
    build: {
      files: [{
        src: ['**'],
        dest: 'built/static/assets',
        cwd: 'client/assets',
        expand: true,
        filter: 'isFile'
      }]
    },

    js: {
      files: [{
        src: ['**'],
        dest: 'built/static/js',
        cwd: 'client_modules/external',
        expand: true,
        filter: 'isFile'
      }]
    },

    test: {
      files: [{
        'built/test/mocha.css': 'node_modules/mocha/mocha.css'
      }, {
        'built/test/mocha.js': 'node_modules/mocha/mocha.js'
      }]
    }
  }
};
