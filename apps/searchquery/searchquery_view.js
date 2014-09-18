'use strict';

var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var stateManager = require('../../client/js/core/state_manager');
var template = require('./searchquery.hbs');
var config = require('../../client/js/config');

var View = Backbone.View.extend({

  initialize: function () {

  },

  off: function () {
    this.undelegateEvents(this.adaptive_events[this.current_device]);
  },

  on: function () {
    var base = this.adaptive_events.base;
    var device = this.adaptive_events[stateManager.getDevice()];
    //TODO Conditional delegate events with enquire for phone, tablet, desktop
    this.current_device = stateManager.getDevice();
    this.setElement($('main.main'));
    this.delegateEvents(_.extend(base, device));
  },

  current_device: null,

  adaptive_events: {

    base: {
      'click .home': function (e) {
        window.alert('mobile events bound home_logged_out view: ' + e.currentTarget);
      }
    },

    mobile: {
      'click .home': function (e) {
        window.alert('mobile events bound home_logged_out view: ' + e.currentTarget);
      }
    },

    tablet: {
      'click .home': function (e) {
        window.alert('tablet events bound home_logged_out view: ' + e.currentTarget);
      }
    },

    desktop: {
      'click .home': function (e) {

      }
    }
  },

  render: function () {
    this.on();
    this
      .$el
      .empty()
      .append(template(config));

    /*
    this.$el
      .transition({
        x: 500
      }, 500, 'snap', function () {
        this.empty()
          .append(template(config))
          .transition({
            x: 1000
          }, 500, 'snap');
      });
      */
    Backbone.history.navigate('search/' + config.currentQuery);
  },

  toString: function () {
    return 'search';
  }
});

module.exports = new View();
