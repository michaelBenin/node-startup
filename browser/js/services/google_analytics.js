'use strict';

// https://developers.google.com/analytics/devguides/collection/analyticsjs/events
// https://blog.kissmetrics.com/8-google-analytics-features/

window.GoogleAnalyticsObject = window.ga; // Acts as a pointer to support renaming.

// Creates an initial ga() function.  The queued commands will be executed once analytics.js loads.
window.ga = window.ga || function() {
  window.ga.q = window.ga.q || [];
  window.ga.q.push(arguments);
};

// Sets the time (as an integer) this tag was executed.  Used for timing hits.
window.ga.l = 1 * new Date();

module.exports = window.ga;
