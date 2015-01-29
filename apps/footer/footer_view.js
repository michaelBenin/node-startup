'use strict';

var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var stateManager = require('../../browser/js/services/state_manager');
var template = require('./footer.hbs');
var config = require('../../browser/js/config');

var View = Backbone.View.extend({

  initialize: function () {

  },

  off: function () {
    this.undelegateEvents(this.adaptive_events[this.current_device]);
  },

  on: function () {
    var base = this.adaptive_events.base;
    var device = this.adaptive_events[stateManager.getDevice()];
    this.current_device = stateManager.getDevice();
    this.setElement($('section.footer'));
    this.delegateEvents(_.extend(base, device));
  },

  current_device: null,

  adaptive_events: {

    base: {

    },

    mobile: {
      'click footer': function (e) {
        window.alert('mobile events bound home_logged_out view: ' + e.currentTarget);
      }
    },

    tablet: {
      'click footer': function (e) {
        window.alert('mobile events bound home_logged_out view: ' + e.currentTarget);
      }
    },

    desktop: {
      'click footer': function (e) {
        window.alert('mobile events bound home_logged_out view: ' + e.currentTarget);
      }
    }
  },

  render: function () {

  },

  toString: function () {
    return 'footer';
  }
});

module.exports = new View();
