'use strict';

module.exports = {
  extract_sourcemap: {
    js: {
      options: {
        'removeSourcesContent': true
      },
      files: {
        'built/static/js': ['built/static/js/node-startup.js']
      }
    }
  }
};
