'use strict';

module.exports = {
  uglify: {
    bundle: {
      options: {
        report: 'gzip',
        sourceMap: true,
        sourceMapIn: 'built/static/js/node-startup.js.map',
        sourceMapName: 'built/static/js/node-startup.js.map'
      },
      files: {
        'built/static/js/node-startup.js': ['built/static/js/node-startup.js']
      }
    },
    minjs: {
      options: {
        report: 'gzip'
      },
      files: [{
        expand: true,
        src: [
          'built/static/js/**/*.js',
          '!built/static/js/node-startup.js'
        ]
      }]
    }
  }
};
