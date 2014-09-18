'use strict';

module.exports = {
  clean: {
    development: [
      'built/static'
    ],
    all: [
      'built',
      'client_modules',
      'node_modules',
      '.sass-cache',
      '.nodemonignore'
    ],
    client: [
      'built',
      'client_modules'
    ],
    node: [
      'built',
      'node_modules'
    ],
    node_modules: [
      'node_modules'
    ],
    scripts: [
      'server/views/partials/scripts.hbs'
    ]
  }
};
