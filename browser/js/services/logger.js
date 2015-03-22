'use strict';

var config = require('config');

module.exports = {

  error_log: [],

  log: function(log) {
    this.error_log.push(log);
    if (config.DEBUG === true) {
      if (typeof console !== 'undefined' && typeof console.log === 'function') {
        window.console.log(this.error_log.join('\n'));
      }
    }
    return this;
  }
};
