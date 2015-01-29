'use strict';

var Backbone = require('backbone');
var ajax = require('../util/ajax');
var Promise = require('bluebird');

Backbone.sync = function (method, model, options) {

  options = options || {};

  var methodMap = {
    create: function (model, options) {
      return ajax(model.urlRoot, {
        type: 'POST',
        data: JSON.stringify(model.toJSON())
      });
    },

    update: function (model, options) {
      return ajax(model.urlRoot, {
        type: 'PUT',
        data: JSON.stringify(model.toJSON())
      });
    },

    patch: function (model, options) {
      return ajax(model.urlRoot, {
        type: 'PUT',
        data: JSON.stringify(model.toJSON())
      });
    },

    'delete': function (model, options) {
      return ajax(model.urlRoot, {
        type: 'DELETE',
        data: model.id
      });
    },

    read: function (model, options) {
      return ajax(model.urlRoot, {
        type: 'GET'
      });
    }
  };

  if (methodMap[method]) {
    return methodMap[method](model, options);
  }

  var promise = new Promise();
  return promise.reject(new Error('Method not available in backbone sync'));
};
