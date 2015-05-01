'use strict';

var config = require('../config');
var ajax = require('../util/ajax');
var ga = require('./google_analytics');

/**
 * Send log request to site.
 * @param {string} level The log level.
 * @param {Object} data The log data.
 * @param {string} message The log message.
 * @private
 * @returns {Promise}
 */
function log(level, data, message) {

  function loggerResponse(response) {
    ga(
      'send',
      'event',
      'LOG_SUCCESS',
      message
    );
  }

  function loggerErrorResponse(error) {
    ga(
      'send',
      'event',
      'LOG_FAILURE',
      message
    );
  }

  return ajax('/log', {
      type: 'POST',
      dataType: 'json',
      data: {
        level: level,
        data: JSON.stringify(data),
        message: message
      }
    }).then(loggerResponse)
    .catch(loggerErrorResponse);
}

/**
 * Factory to create log methods.
 * @param {string} level The log level method name.
 * @private
 * @returns {function}
 */
function createLogFn(level) {
  return function(data, message) {

    if (!data && !message) {
      // console error if in development
      return false;
    }

    if (typeof data === 'string') {
      message = data;
      data = {};
    }

    return log(level, data, message);
  };
}

/**
 * Send log request to server side.
 * @typedef {function} logMethod
 * @param {Object|string} data The log data or message.
 * @param {string=} message The log message if the log data was specified.
 * @returns {Promise}
 */

/**
 * Methods: trace, debug, info, warn, error, fatal.
 *
 * See methods API: https://github.com/trentm/node-bunyan#log-method-api
 *
 * @example
 *   var log = require('./services/logger');
 *   log.error({ stack: err.stack }, 'Descriptive Error message' );
 *
 * @module services/logger
 */
module.exports = {

  /**
   * @name module:services/logger.trace
   * @type {logMethod}
   */
  trace: createLogFn('trace'),

  /**
   * @name module:services/logger.debug
   * @type {logMethod}
   */
  debug: createLogFn('debug'),

  /**
   * @name module:services/logger.info
   * @type {logMethod}
   */
  info: createLogFn('info'),

  /**
   * @name module:services/logger.warn
   * @type {logMethod}
   */
  warn: createLogFn('warn'),

  /**
   * @name module:services/logger.error
   * @type {logMethod}
   */
  error: createLogFn('error'),

  /**
   * @name module:services/logger.fatal
   * @type {logMethod}
   */
  fatal: createLogFn('fatal')
};
