'use strict';

module.exports = {
  scsslint: {
    allFiles: [
      'apps/*/**.scss',
      'client/sass/*/**.scss'
    ],
    options: {
      emitError: true,
      force: true
    }
  }
};
