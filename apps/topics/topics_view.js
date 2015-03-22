'use strict';

var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('lodash');
var stateManager = require('../../browser/js/services/state_manager');
var template = require('./topics.hbs');
var config = require('../../browser/js/config');
var RepoModel = require('../../browser/js/models/repo_model');
var domDiffMixin = require('../../browser/js/mixins/dom_diff_mixin');
var Repo = new RepoModel();

var View = Backbone.View.extend({

  off: function () {
    this.undelegateEvents(this.adaptive_events[this.current_device]);
  },

  on: function () {
    var base = this.adaptive_events.base;
    var device = this.adaptive_events[stateManager.getDevice()];
    //TODO Conditional delegate events with enquire for phone, tablet, desktop
    this.current_device = stateManager.getDevice();
    this.setElement($('main.main'));
    this.delegateEvents(_.extend({}, base, device));
    return this;
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
    var self = this;

    function fetchRepoSuccess(data) {
      var context = _.extend({}, config, data);
      var renderedHTML = template(context);
      self.diff(self.el, renderedHTML);
      self.on();
    }

    function fetchRepoCatch() {

      var renderedHTML = template(config);
      var virtualDOM = self.makeVirtualDOM('main', 'main', renderedHTML);
      var existingDOM = self.el;

      self
        .$el
        .hide();

      self
        .diff(virtualDOM, existingDOM)
        .$el
        .fadeIn();
    }

    Repo.fetch()
      .then(fetchRepoSuccess)
      .catch(fetchRepoCatch);

    Backbone.history.navigate('topics');
  },

  toString: function () {
    return 'topics';
  }
});

// Add mixins here
var mixins = _.extend({}, domDiffMixin);

_.extend(View.prototype, mixins);

module.exports = new View();
