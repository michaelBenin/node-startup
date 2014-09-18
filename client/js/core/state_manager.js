'use strict';

var $ = require('jquery');
var Backbone = require('backbone');
var _ = require('underscore');
var deviceManager = require('./device_manager');
var scrollManager = require('./scroll_manager');
var collectionManager = require('./collection_manager');

var stateManager = _.extend({},
  Backbone.Events,
  scrollManager,
  collectionManager,
  deviceManager, {
    'currentViews': [],
    'initialPageLoad': true,
    'pushStateSupport': (window.history && window.history.pushState),
    'rootURL': window.location.protocol + '//' + document.location.host + '/',
    'url': document.location.toString().split(window.location.protocol + '//' + document.location.host + '/'),

    initPageLoad: function () {
      this.initialPageLoad = false;
      return this;
    },

    addView: function (view) {
      this.currentViews.push(view);
      return this;
    },

    removeView: function (view) {
      var index = _.indexOf(this.currentViews, view);
      if (index !== -1) {
        this.currentViews.splice(index, 1);
      }
      return this;
    },

    undelegateCurrentEvents: function () {

      _.each(this.currentViews, function (view) {
        view.off();
      });

      this.currentViews.splice(0, this.currentViews.length);

      return this;
    },

    delegateCurrentEvents: function () {

      _.each(this.currentViews, function (view) {
        view.on();
      });

      return this;
    },

    manageSingleState: function (view) {

      this.addView(view);

      if (!this.initialPageLoad) {
        this.undelegateCurrentEvents();
        view.render();
        return this;
      }

      if (view.bootstrapData) {
        view.bootstrapData();
      }

      view.on();

      this.initPageLoad();

      return this;

    },

    stateManage: function (view_event_list) {
      var self = this;

      if (!this.initialPageLoad) {

        var off_views = _.difference(this.currentViews, view_event_list);

        var render_views = _.difference(view_event_list, this.currentViews);

        _.each(off_views, function (view) {
          view.off();
          self.removeView(view);
        });

        _.each(render_views, function (view) {
          view.render();
          self.addView(view);
        });

        return this;

      }

      _.each(view_event_list, function (view) {

        self.addView(view);

        if (view.bootstrapData) {
          view.bootstrapData();
        }

        view.on();

        // server cannot parse #
        if (/#/.test(document.location.toString()) === true) {
          return view.render();
        }

      });

      this.initPageLoad();

    },

    resetState: function () {
      _.each(this.currentViews, function (view) {
        view.off();
        view.on();
      });
    },

    windowHandler: function () {
      var self = this;
      var device_cache = this.getDevice();
      var debounced = _.debounce(function () {
        self.initDevice();
        if (device_cache !== self.getDevice()) {
          device_cache = self.getDevice();
          self.resetState();
        }
      }, 300);
      $(window).on('resize', debounced);
      return this;
    },

    anchorHandler: function () {
      $(document).on('click', 'a:not([data-bypass])', function (event) {
        event.preventDefault();
      });
      return this;
    },

    formHandler: function () {
      $(document).on('submit', 'form:not([data-bypass])', function (event) {
        event.preventDefault();
      });
      return this;
    },

    historyFix: function () {
      var location = document.location.toString();
      if (!this.pushStateSupport && /#/.test(location) === false) {
        document.location = this.rootURL + '#' + this.url[1];
        setTimeout(function () {
          document.location.reload();
        }, 100);
      }
      if (this.pushStateSupport && /#/.test(location) === true) {
        document.location = this.rootURL + this.url[1];
        setTimeout(function () {
          document.location.reload();
        }, 100);
      }
      // Todo separate out into analytics util/service
      window._gaq = window._gaq || [];
      window._gaq.push(['_trackEvent', 'STATE_MANAGER', 'HTML5_HISTORY_SUPPORT', this.pushStateSupport]);
      return this;
    },

    unload: function (msg) {
      $(window).on('beforeunload', function () {
        return msg;
      });
    },

    initOnLoad: function () {
      var self = this;
      $(function () {
        var $config = $('#config');
        var config = _.extend({}, config, $.parseJSON($config.html()));
        $config.remove();
        self.config = config;
      });
    },

    init: function () {
      this.initDevice()
        .anchorHandler()
        .formHandler()
        .historyFix()
        .windowHandler()
        .initScrollManager()
        .initOnLoad();
    }

  });

module.exports = stateManager;
