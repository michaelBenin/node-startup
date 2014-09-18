// Todo Unify request/ajax on client and server

'use strict';

var Backbone = require('backbone');
var Promise = require('bluebird');
var request = Promise.promisify(require('request'));

Backbone.sync = function (method, model, options) {

  options = options || {};

  var methodMap = {
    create: function (model, options) {
      return request({
        url: model.urlRoot,
        type: 'POST',
        data: JSON.stringify(model.toJSON())
      });
    },

    update: function (model, options) {
      return request({
        url: model.urlRoot,
        type: 'PUT',
        data: JSON.stringify(model.toJSON())
      });
    },

    patch: function (model, options) {
      return request({
        url: model.urlRoot,
        type: 'PUT',
        data: JSON.stringify(model.toJSON())
      });
    },

    'delete': function (model, options) {
      return request({
        url: model.urlRoot,
        type: 'DELETE',
        data: model.id
      });
    },

    read: function (model, options) {
      return request({
        url: model.urlRoot,
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
