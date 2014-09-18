'use strict';

module.exports = {
  htmlcompressor: {

    options: {
      type: 'html',
      preserveServerScript: true,
      compressJs: true,
      compressCss: true,
      jsCompressor: 'closure',
      closureOptLevel: 'simple'
    },

    development: {
      files: {
        'server/views/partials/scripts.hbs': 'server/views/partials/scripts_template/scripts_dev.hbs'
      }
    },

    production: {
      files: {
        'server/views/partials/scripts.hbs': 'server/views/partials/scripts_template/scripts_prod.hbs'
      }
    },

    pre_watch_unit_test: {
      files: [{
        'server/views/partials/test/test-scripts.hbs': 'server/views/partials/test/scripts_template/test_scripts_dev.hbs'
      }]
    },

    unit_test: {
      files: [{
        'server/views/partials/test/test-scripts.hbs': 'server/views/partials/test/scripts_template/test_scripts_prod.hbs'
      }]
    }
  }
};
