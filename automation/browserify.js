'use strict';

var fs = require('fs');
var start = false;

module.exports = {

  browserify: {
    modern: {
      src: ['client/js/init.js'],
      dest: 'built/static/js/node-startup.js',
      options: {
        bundleOptions: {
          debug: true
        },
        transform: [
          'hbsfy'
        ]
      }
    },

    modern_dev: {
      src: ['client/js/init.js'],
      dest: 'built/static/js/node-startup.js',
      options: {
        bundleOptions: {
          debug: true
        },
        keepAlive: true,
        watch: true,
        transform: [
          'hbsfy'
        ],
        postBundleCB: function (err, src, next) {
          var promiseScript = require('./util/send_javascript');
          promiseScript.reset();
          var resolveBundle = promiseScript.resolveBundle;
          var rejectBundle = promiseScript.rejectBundle;

          if (err) {
            rejectBundle(err);
            return next(err, src);
          }

          resolveBundle(src);

          fs.writeFileSync('../.rebooted', 'rebooted: ' + new Date());

          if (!start) {
            require('open')('http://127.0.0.1:8000');
            start = true;
          }
        }
      }
    },

    watch_unit_test: {
      src: [
        'client/js/init.js',
        'client/js/test/init.js'
      ],
      dest: 'built/test/test-node-startup.js',
      options: {
        bundleOptions: {
          debug: true
        },
        keepAlive: true,
        watch: true,
        transform: [
          'hbsfy'
        ],
        postBundleCB: function (err, src, next) {
          var promiseScript = require('./util/send_test_javascript');
          promiseScript.reset();
          var resolveBundle = promiseScript.resolveBundle;
          var rejectBundle = promiseScript.rejectBundle;

          if (err) {
            rejectBundle(err);
            return next(err, src);
          }

          resolveBundle(src);

          fs.writeFileSync('../.rebooted', 'rebooted: ' + new Date());

          if (!start) {
            require('open')('http://127.0.0.1:8000/test');
            start = true;
          }
        }
      }
    },

    test: {
      src: [
        'client/js/init.js',
        'client/js/test/init.js'
      ],
      dest: 'built/test/test-node-startup.js',
      options: '<%= browserify.modern.options %>'
    }

  }
};
