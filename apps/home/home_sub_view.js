'use strict';

var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('lodash');
var template = require('./home_sub.hbs');
var stateManager = require('../../browser/js/services/state_manager');
var config = require('../../browser/js/config');
var SubView = Backbone.View.extend({

  initialize: function() {

  },

  off: function() {
    this.undelegateEvents(this.adaptive_events[this.current_device]);
  },

  on: function() {
    var base = this.adaptive_events.base;
    var device = this.adaptive_events[stateManager.getDevice()];
    this.current_device = stateManager.getDevice();
    this.delegateEvents(_.extend({}, base, device));
  },

  current_device: null,

  adaptive_events: {

    base: {
      'click .link': function(e) {
        alert('OMG! ' + this.model.attributes.title);
      }
    },

    mobile: {
      'click a': function(e) {
        window.alert('mobile events bound home_logged_out view: ' + e.currentTarget);
      }
    },

    tablet: {
      'click a': function(e) {
        window.alert('tablet events bound home_logged_out view: ' + e.currentTarget);
      }
    },

    desktop: {
      'click a': function(e) {

      }
    }
  },

  render: function() {
    var context = _.extend({},
      config,
      this.model.toJSON()
    );

    this.on();
    this
      .$el
      .empty()
      .css('opacity', 0)
      .append(template(context))
      .fadeIn();
  },

  toString: function() {
    return 'home subview';
  }
});

module.exports = SubView;
