'use strict';

var fs = require('fs');
var start = false;

var exposify = require('exposify');

// Add globals here
exposify.config = {
  modernizr: 'Modernizr',
  foundation: 'Foundation'
};

module.exports = {

  browserify: {

    modern: {
      src: ['browser/js/app.js'],
      dest: 'built/static/js/node-startup.js',
      options: {
        browserifyOptions: {
          debug: true
        },
        transform: [
          'exposify',
          'hbsfy',
          'brfs',
          'bulkify'
        ]
      }
    },

    modern_dev: {
      src: ['browser/js/app.js'],
      dest: 'built/static/js/node-startup.js',
      options: {
        browserifyOptions: {
          debug: true
        },
        keepAlive: true,
        watch: true,
        transform: [
          'exposify',
          'hbsfy',
          'brfs',
          'bulkify'
        ],
        postBundleCB: function(err, src, next) {
          var promiseScript = require('./utils/send_javascript');
          promiseScript.reset();
          var resolveBundle = promiseScript.resolveBundle;
          var rejectBundle = promiseScript.rejectBundle;

          if (err) {
            rejectBundle(err);
            return next(err, src);
          }

          resolveBundle(src);
          console.log('testing');
          fs.writeFileSync('./.rebooted', 'rebooted: ' + new Date());

          if (!start) {
            require('open')('http://127.0.0.1:8000');
            start = true;
          }
        }
      }
    },

    watch_unit_test: {
      src: [
        'browser/js/app.js',
        'test/browser/unit/init.js'
      ],
      dest: 'built/test/test-node-startup.js',
      options: {
        browserifyOptions: {
          debug: true
        },
        keepAlive: true,
        watch: true,
        transform: [
          'exposify',
          'hbsfy',
          'brfs',
          'bulkify'
        ],
        postBundleCB: function(err, src, next) {
          var promiseScript = require('./utils/send_test_javascript');
          promiseScript.reset();
          var resolveBundle = promiseScript.resolveBundle;
          var rejectBundle = promiseScript.rejectBundle;

          if (err) {
            rejectBundle(err);
            return next(err, src);
          }

          resolveBundle(src);

          fs.writeFileSync('./.rebooted', 'rebooted: ' + new Date());

          if (!start) {
            require('open')('http://127.0.0.1:8000/test');
            start = true;
          }
        }
      }
    },

    test: {
      src: [
        'browser/js/app.js',
        'test/browser/init.js'
      ],
      dest: 'built/test/test-node-startup.js',
      options: '<%= browserify.modern.options %>'
    }

  }
};
