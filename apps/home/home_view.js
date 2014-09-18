'use strict';

var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var stateManager = require('../../client/js/core/state_manager');
var config = require('../../client/js/config');

var template = require('./home.hbs');
var Handlebars = require('hbsfy/runtime');
Handlebars.registerPartial('home_sub', require('./home_sub.hbs'));

var collectionViewOn = stateManager.collectionViewOn;
var collectionViewOff = stateManager.collectionViewOff;

var subView = require('./home_sub_view');
var LinksCollection = require('../../shared/models/links/links_client');
var View = Backbone.View.extend({

  bootstrapData: function () {
    this.setElement($('main.main'));
    var context = this.$el.find('section').attr('data-context');
    if (context) {
      var model = JSON.parse(this.$el.find('section').attr('data-context'));
      this.collection = new LinksCollection(model.list);
    }
  },

  onCollections: function () {
    var elements = this.$el.find('ul').children('li');
    this.subviews = collectionViewOn(subView, elements, this.collection);
  },

  off: function () {
    collectionViewOff(this.subviews);
    this.subviews = undefined;
    this.undelegateEvents(this.adaptive_events[this.current_device]);
  },

  on: function () {
    var base = this.adaptive_events.base;
    var device = this.adaptive_events[stateManager.getDevice()];
    //TODO Conditional delegate events with enquire for phone, tablet, desktop
    this.current_device = stateManager.getDevice();
    this.delegateEvents(_.extend({}, base, device));
    this.onCollections();
    return this;
  },

  current_device: null,

  adaptive_events: {

    base: {
      'click .home': function (e) {

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
        this.collection.fetch().then(function (data) {
          window.alert(data);
        }).catch(function (error) {
          window.alert(error);
        });
      }
    }
  },

  render: function () {
    this.setElement($('main.main'));

    var model = {
      title: 'testing it',
      content: 'test',
      list: [{
        title: 'test',
        url: 'http://linkwaylive.com'
      }, {
        title: 'test2',
        url: 'http://test.com'
      }]
    };

    var context = _.extend({}, config, model);
    this.collection = new LinksCollection(model.list);

    this
      .on()
      .$el
      .empty()
      .hide()
      .append(template(context))
      .fadeIn();

    this.onCollections();

    Backbone.history.navigate('');
  },

  toString: function () {
    return 'home';
  }
});

module.exports = new View();
