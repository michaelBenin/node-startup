'use strict';

var start = false;

module.exports = {
  nodemon: {
    dev: {
      script: '../lib/app.js',
      options: {
        args: ['local'],
        nodeArgs: [
          // Uncomment to debug as soon as script initializes
          // '--debug-brk'
          '--debug'
        ],
        env: {},
        callback: function (nodemon) {
          nodemon.on('log', function (event) {
            console.log(event.colour);
          });
          nodemon.on('config:update', function () {

            if (!start) {
              setTimeout(function () {
                require('open')('http://127.0.0.1:8080/debug?port=5858');
              }, 1000);
              start = true;
            }

          });
          // refreshes browser when server reboots
          nodemon.on('restart', function () {
            // Delay before server listens on port
            console.log('nodemon writing file');
            setTimeout(function () {
              require('fs').writeFileSync('../.rebooted', 'rebooted: ' + new Date());
            }, 1000);
          });
        },
        cwd: __dirname,
        ignore: [
          'apps/**/*.js',
          'node_modules/**'
        ],
        ext: 'js,hbs',
        watch: [
          '../apps',
          '../lib'
        ],
        delay: 1
      }
    },
    exec: {
      options: {
        exec: ''
      }
    }
  }
};
