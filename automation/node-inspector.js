'use strict';

module.exports = {
  'node-inspector': {
    custom: {
      options: {
        'web-port': 8080,
        'web-host': 'localhost',
        'debug-port': 5858,
        'save-live-edit': true,
        'no-preload': true,
        'hidden': ['node_modules']
      }
    }
  }
};
