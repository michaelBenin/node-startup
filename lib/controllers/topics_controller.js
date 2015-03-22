'use strict';

var RepoModel = require('./../models/repo_model');
var Repo = new RepoModel();
var _ = require('lodash');

function topicsController(req, res, next) {
  Repo.fetch().then(function (data) {
    data = JSON.parse(data[1]);
    var context = _.extend({}, data, {
      layout: 'layouts/layout'
    });
    res.render('pages/topics', context);
  }).catch(function (e) {
    res.render('pages/topics', {
      layout: 'layouts/layout'
    });
  });
}

module.exports = topicsController;
