'use strict';

var express = require('express');
var app = express();
var compression = require('compression')();
app.use(compression);
var Promise = require('bluebird');
var promiseScript = Promise.defer();

var setupScript = {

  reset: function () {
    promiseScript = Promise.defer();
  },

  bundle: function () {
    return promiseScript.promise;
  },

  resolveBundle: function setbundle(bundle) {
    promiseScript.resolve(bundle);
  },

  rejectBundle: function errorBundle(error) {
    promiseScript.reject(error);
  }
};

app.get('/js', function (req, res, next) {
  setupScript.bundle().then(function (bundle) {
    res.type('js');
    return res.send(bundle);
  }).catch(function (error) {
    res.send('alert("error in bundle ' + error.message + '");');
  });
});

var server = app.listen(1111);

module.exports = setupScript;
