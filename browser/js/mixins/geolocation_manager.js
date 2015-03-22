'use strict';

var $ = require('jquery');

module.exports = {

  support: ((navigator.geolocation) ? true : false),

  currentPosition: null,

  watchId: null,

  getCurrentPosition: function() {
    // http://www.w3.org/TR/geolocation-API/#position-options
    if (this.support) {
      return window.navigator.geolocation.getCurrentPosition(function(position) {
        return position;
      }, function(error) {
        return false;
        // error handling
      });
    }
    return false;
  },

  watchPositioning: function() {
    // http://www.w3.org/TR/geolocation-API/#position-options
    if (this.support) {
      var self = this;
      this.watchId = window.navigator.geolocation.watchPosition(function(position) {
          self.currentPosition = position;
          $(window).trigger('geolocation');
        },
        function(error) {

        });
    }
    return false;
  },

  stopWatchPositioning: function() {
    if (this.watchId) {
      window.navigator.geolocation.clearWatch(this.watchId);
    }
  }

};
