'use strict';

module.exports = {
  mocha: {
    test: {
      options: {
        urls: [
          'http://127.0.0.1:8000/test'
        ],
        bail: true,
        log: true,
        ignoreLeaks: false,
        reporter: 'List',
        run: true,
        timeout: 10000
      }
    }
  }
};
