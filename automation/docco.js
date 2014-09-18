'use strict';

module.exports = {
  docco: {
    js: {
      src: [
        'appa/**/*.js',
        'client/qunit-1.11.0/*.js',
        'server/js/lib/**/*.js'
      ],
      options: {
        output: 'built/docs/JavaScript'
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
