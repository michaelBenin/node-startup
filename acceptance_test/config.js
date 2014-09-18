'use strict';

var _ = require('underscore');
var env = process.env.NODE_ENV;

var config = {
  base: {
    env: env,
    protocol: 'http',
    base_url: 'localhost:8000',
    user: '',
    password: '',
    sauceLabs: {
      host: 'ondemand.saucelabs.com',
      port: 80,
      user: 'beninmichael',
      key: '515c8c13-b75f-4ae0-a0fa-0ece895c458e',
      logLevel: 'silent',
      desiredCapabilities: {
        browserName: 'chrome',
        version: '33',
        platform: 'OS X 10.9',
        tags: [
          ''
        ],
        name: ''
      }
    }
  },
  development: {},
  jenkins: {},
  staging: {}
};

module.exports = _.extend({}, config.base, config[env]);
