'use strict';

module.exports = {

  copy: {
    audio: {
      files: [{
        src: ['**'],
        dest: 'built/static/media/audio',
        cwd: 'browser/media/audio',
        expand: true,
        filter: 'isFile'
      }]
    },

    images: {
      files: [{
        src: ['**'],
        dest: 'built/static/media/images',
        cwd: 'browser/media/images',
        expand: true,
        filter: 'isFile'
      }]
    },

    fonts: {
      files: [{
        src: ['**'],
        dest: 'built/static/media/fonts',
        cwd: 'browser/media/fonts',
        expand: true,
        filter: 'isFile'
      }]
    },

    icons: {
      files: [{
        src: ['**'],
        dest: 'built/static/media/icons',
        cwd: 'browser/media/icons',
        expand: true,
        filter: 'isFile'
      }]
    },

    videos: {
      files: [{
        src: ['**'],
        dest: 'built/static/media/videos',
        cwd: 'browser/media/videos',
        expand: true,
        filter: 'isFile'
      }]
    },

    js: {
      files: [{
        'built/static/js/modernizr.js': 'browser_modules/modernizr/modernizr.js'
      }, {
        'built/static/js/es5.js': 'browser_modules/js-polyfills/es5.js'
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
