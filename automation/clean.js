'use strict';

module.exports = {
  clean: {
    development: [
      'built/static'
    ],
    all: [
      'built',
      'browser_modules',
      'node_modules',
      '.nodemonignore',
      'npm-debug.log'
    ],
    browser: [
      'built',
      'browser_modules'
    ],
    node: [
      'built',
      'node_modules'
    ],
    node_modules: [
      'node_modules'
    ]
  }
};
