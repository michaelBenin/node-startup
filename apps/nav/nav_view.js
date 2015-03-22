'use strict';

var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('lodash');
var foundation = require('foundation');
var extendWithSuper = require('extend-with-super');
var stateManager = require('../../browser/js/services/state_manager');
var template = require('./nav.hbs');
var config = require('../../browser/js/config');
var homeView = require('../home/home_view');
var loginView = require('../login/login_view');
var linksView = require('../links/links_view');
var usersView = require('../users/users_view');
var aboutView = require('../about/about_view');
var signupView = require('../signup/signup_view');
var topicsView = require('../topics/topics_view');
var footerView = require('../footer/footer_view');
var navView;

var simpleView = function simpleview(view) {
  var viewMap = {
    links: linksView,
    users: usersView,
    about: aboutView,
    'log-in': loginView,
    'sign-up': signupView,
    topics: topicsView,
    '/': homeView
  };
  var resolvedView = viewMap[view];
  if (resolvedView) {
    return stateManager.stateManage([
      navView,
      resolvedView,
      footerView
    ]).scrollTop();
  }
  return false;
};

var View = Backbone.View.extend({

  initialize: function() {

  },

  off: function() {
    this.undelegateEvents(this.adaptive_events[this.current_device]);
  },

  on: function() {
    var base = this.adaptive_events.base;
    var device = this.adaptive_events[stateManager.getDevice()];
    this.current_device = stateManager.getDevice();
    this.setElement($('.nav-view'));
    this.delegateEvents(extendWithSuper({}, base, device));
  },

  current_device: null,

  adaptive_events: {

    base: {
      'click a': function(e) {
        var target = e.originalEvent.target;
        var page = target.getAttribute('href') || target.getAttribute('data-href');
        if (page) {
          return simpleView(page);
        }
        return true;
      },

      'submit form': function(e) {
        window.alert('search submitted');
      },

      'focus input': function(e) {
        console.log('search focused');
      },

      'change input': function(e) {
        console.log('search input changed');
      }
    },

    small: {
      'click a': function(e) {
        this._super(e);
        // Foundation has an issue open for toggling top-bar
        $('.exit-off-canvas').trigger('click');
      }
    },

    medium: {

    },

    large: {

    },

    xxlarge: {

    }
  },

  render: function() {
    this.$el
      .empty()
      .hide()
      .append(template(config))
      .fadeIn('fast');
    this.on();
  },

  toString: function() {
    return 'nav';
  }
});

module.exports = navView = new View();
