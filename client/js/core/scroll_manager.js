'use strict';

var _ = require('underscore');
var $ = require('jquery');
var $window;
var $html;

module.exports = {

  initScrollManager: function () {
    $(function () {
      $window = $('window');
      $html = $('html');
    });
    return this;
  },

  isScrolling: false,

  scrollTop: function (duration, offset) {
    if (!duration) {
      duration = 450;
    }

    if (!offset) {
      offset = '0px';
    }

    $html.velocity('scroll', {
      duration: duration,
      offset: offset
    });

    return this;
  },

  onScroll: function () {
    var _this = this;
    _.debounce(function () {
      _this.isScrolling = true;
      $window.trigger('scrollstart');
    }, 200, true);
  },

  offScroll: function () {
    var _this = this;
    _.debounce(function () {
      _this.isScrolling = false;
      $window.trigger('scrollend');
    }, 200);
  },

  watchScrolling: function () {
    $window.on('scroll', this.onScroll);
    $window.on('scroll', this.offScroll);
  },

  stopWatchScrolling: function () {
    $window.off('scroll', this.onScroll);
    $window.off('scroll', this.offScroll);
  }

};
