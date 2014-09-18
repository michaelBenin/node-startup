'use strict';

var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var stateManager = require('../../client/js/core/state_manager');
var template = require('./nav.hbs');
var config = require('../../client/js/config');
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

  initialize: function () {

  },

  off: function () {
    this.undelegateEvents(this.adaptive_events[this.current_device]);
  },

  on: function () {
    var base = this.adaptive_events.base;
    var device = this.adaptive_events[stateManager.getDevice()];
    this.current_device = stateManager.getDevice();
    this.setElement($('section.header'));
    this.delegateEvents(_.extend(base, device));
  },

  current_device: null,

  adaptive_events: {

    base: {
      'click nav': function (e) {
        var target = e.originalEvent.target;
        var page = target.getAttribute('href') || target.getAttribute('data-href');
        if (page) {
          return simpleView(page);
        }
        return false;
      },

      'submit form': function (e) {
        window.alert('search submitted');
      },

      'focus input': function (e) {
        console.log('search focused');
      },

      'change input': function (e) {
        console.log('search input changed');
      }
    },

    mobile: {

    },

    tablet: {
      'click .tablet-mobile': function (event) {
        var $ul = $(event.currentTarget).parent('ul');
        var $document = $(document);
        var hasOpen = $ul.hasClass('open');

        var removeOpen = function () {
          $ul.removeClass('open');
          $document.off('touchstart', removeOpen);
          $document.off('click', removeOpen);

        };

        if (hasOpen) {
          $ul.removeClass('open');
          $document.off('touchstart', removeOpen);
          return $document.off('click', removeOpen);
        }

        if (!hasOpen) {
          $ul.addClass('open');
          $document.on('touchstart', removeOpen);
          return $document.on('click', removeOpen);
        }
      }
    },

    desktop: {

    }
  },

  render: function () {
    this.$el
      .empty()
      .hide()
      .append(template(config))
      .fadeIn('fast');
    this.on();
  },

  toString: function () {
    return 'nav';
  }
});

module.exports = navView = new View();
