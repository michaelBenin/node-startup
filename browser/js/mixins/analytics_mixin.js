'use strict';
var ga = require('../services/google_analytics');
var initialized = false;

module.exports = {

  ga: ga,

  initializeAnalytics: function() {

    if (initialized) {
      return this;
    }

    initialized = true;

    var config = this.config;
    var gaId = config.googleAnalyticsId;
    var scriptUrl = 'https://www.google-analytics.com/analytics.js';

    if (config.debug) {
      scriptUrl = 'https://www.google-analytics.com/analytics_debug.js';
      window.ga_debug = {
        trace: true
      };
    }

    var script = document.createElement('script');
    var firstScript = document.getElementsByTagName('script')[0];
    script.async = true;
    script.src = scriptUrl;
    firstScript.parentNode.insertBefore(script, firstScript);

    ga('create', gaId, 'auto');

    ga('send', 'pageview');

    ga(
      'send',
      'event',
      'timing',
      'JAVASCRIPT_EXECUTION_TIME',
      'PAGELOAD', (new Date().getTime() - window.startTime) / 1000
    );

    var pushState = (this.pushStateSupport ? 'HTML5 History Supported' : 'HTML5 HISTORY NOT SUPPORTED');

    ga(
      'send',
      'event',
      'INITIALIZE',
      'HTML5_HISTORY_SUPPORT',
      pushState
    );
  }
};
