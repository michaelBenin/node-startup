'use strict';

module.exports = {
  docco: {

    shared: {
      src: [
        'shared/**/*.js'
      ],
      options: {
        output: 'built/docs/JavaScript/shared'
      }
    },

    apps: {
      src: [
        'apps/**/*.js'
      ],
      options: {
        output: 'built/docs/JavaScript/apps'
      }
    },

    node: {
      src: [
        'lib/**/*.js'
      ],
      options: {
        output: 'built/docs/JavaScript/node'
      }
    },

    browser: {
      src: [
        'browser/**/*.js'
      ],
      options: {
        output: 'built/docs/JavaScript/browser'
      }
    },

    grunt: {
      src: [
        './Gruntfile.js'
      ],
      options: {
        output: 'built/docs/Gruntfile'
      }
    }
  }
};
