'use strict';

module.exports = {
  mochaTest: {
    unit: {
      options: {
        reporter: 'spec'
      },
      src: [
        'test/server/unit/**/*.js'
      ]
    },
    integration: {
      options: {
        reporter: 'spec'
      },
      src: [
        'test/server/integration/**/*.js'
      ]
    }
  }
};
