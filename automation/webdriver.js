'use strict';

module.exports = {
  webdriver: {
    headless: {
      options: {
        bail: false,
        desiredCapabilities: {
          browserName: 'phantomjs'
        }
      },
      tests: [
        '../test/acceptance_test/init.js'
      ]
    },
    sauce: {
      options: {
        host: 'ondemand.saucelabs.com',
        port: 80,
        user: 'beninmichael',
        key: '',
        desiredCapabilities: {
          browserName: 'chrome',
          version: '33',
          platform: 'OS X 10.9',
          tags: [
            ''
          ],
          name: ''
        }
      },
      tests: [
        '../test/acceptance_test/init.js'
      ]
    }
  }
};
