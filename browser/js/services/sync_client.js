'use strict';

var Backbone = require('backbone');
var ajax = require('../util/ajax');
var Promise = require('bluebird');
var _ = require('underscore');

Backbone.sync = function (method, model, options) {

  var methodMap = {

    create: function (model, options) {

      options = _.defaults(options, {
        type: 'POST',
        dataType: 'json',
        data: model.toJSON()
      });

      var url = options.url || model.urlRoot;

      return ajax(url, options);
    },

    update: function (model, options) {

      options = _.defaults(options, {
        type: 'PUT',
        dataType: 'json',
        data: model.toJSON()
      });

      var url = options.url || model.urlRoot;

      return ajax(url, options);
    },

    patch: function (model, options) {

      options = _.defaults(options, {
        type: 'PUT',
        dataType: 'json',
        data: model.toJSON()
      });

      var url = options.url || model.urlRoot;

      return ajax(url, options);
    },

    delete: function (model, options) {

      options = _.defaults(options, {
        type: 'DELETE',
        dataType: 'json',
        data: {
          id: model.id
        }
      });

      var url = options.url || model.urlRoot;

      return ajax(url, options);
    },

    read: function (model, options) {

      options = _.defaults(options, {
        type: 'GET'
      });

      var url = options.url || model.urlRoot;

      return ajax(url, options);
    }
  };

  return new Promise(function (resolve, reject) {

    options = options || {};

    if (!model.urlRoot && !options.url) {
      return reject(new Error('Sync needs either model.urlRoot or options.url'));
    }

    if (methodMap[method]) {
      return resolve(methodMap[method](model, options));
    }

    return reject(new Error('Method not available in backbone sync'));
  });
};
