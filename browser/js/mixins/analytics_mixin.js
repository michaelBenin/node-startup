'use strict';
var ga = require('../services/google_analytics');

module.exports = {

  ga: ga,

  initializeAnalytics: function() {

    var gaId = this.config.googleAnalyticsId;
    var script = document.createElement('script');
    var firstScript = document.getElementsByTagName('script')[0];
    script.async = true;
    script.src = 'https://www.google-analytics.com/analytics.js';
    firstScript.parentNode.insertBefore(script, firstScript);

    ga('create', gaId, 'auto');

    ga('send', 'pageview');

    ga(
      'send',
      'event',
      'JAVASCRIPT_EXECUTION_TIME', (new Date().getTime() - window.startTime) / 1000
    );

    ga(
      'send',
      'event',
      'STATE_MANAGER',
      'HTML5_HISTORY_SUPPORT',
      this.pushStateSupport
    );
  }

};
