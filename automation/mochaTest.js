'use strict';

module.exports = {
  mochaTest: {
    unit: {
      options: {
        reporter: 'spec'
      },
      src: [
        'server/test/unit/init.js'
      ]
    },
    integration: {
      options: {
        reporter: 'spec'
      },
      src: [
        'server/test/integration/init.js'
      ]
    }
  }
};
