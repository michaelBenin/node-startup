'use strict';

var $ = require('jquery');
var Backbone = require('backbone');
var _ = require('underscore');
var deviceManager = require('./../mixins/device_manager');
var scrollManager = require('./../mixins/scroll_manager');
var collectionManager = require('./../mixins/collection_manager');

var stateManager = _.extend({},
  Backbone.Events,
  scrollManager,
  collectionManager,
  deviceManager, {
    'currentViews': [],
    'initialPageLoad': true,
    'pushStateSupport': (window.history && window.history.pushState),

    'rootURL': window.location.protocol +
      '//' +
      document.location.host +
      '/',

    'url': document.location.toString().split(window.location.protocol +
      '//' +
      document.location.host +
      '/'),

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

    stateManage: function (viewEventList) {
      var self = this;

      if (!this.initialPageLoad) {

        var offViews = _.difference(this.currentViews, viewEventList);

        var renderViews = _.difference(viewEventList, this.currentViews);

        _.each(offViews, function (view) {
          view.off();
          self.removeView(view);
        });

        _.each(renderViews, function (view) {
          view.render();
          self.addView(view);
        });

        return this;

      }

      _.each(viewEventList, function (view) {

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
      // Todo separate out into analytics utils/services
      var ga = window.ga;
      ga = ga || function () {
        (ga.q = ga.q || []).push(arguments);
      };
      ga.l = new Date();
      ga(
        'send',
        'event',
        'STATE_MANAGER',
        'HTML5_HISTORY_SUPPORT',
        this.pushStateSupport
      );
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
        // Force rendering instead of event binding
        if (self.config.MOBILE_APP) {
          this.initPageLoad();
        }
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
