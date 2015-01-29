'use strict';

var RepoModel = require('./../models/repo_model');
var Repo = new RepoModel();
var _ = require('underscore');

module.exports = function (app) {

  return {
    'index': function (req, res, next) {

      return res.render('pages/index', {

        layout: 'layouts/layout',

        title: 'testing it',
        content: 'test',
        list: [{
          title: 'test',
          url: 'http://linkwaylive.com'
        }, {
          title: 'test2',
          url: 'http://test.com'
        }]
      });

    },

    'about': function (req, res, next) {
      return res.render('pages/about', {
        layout: 'layouts/layout'
      });
    },

    'links': function (req, res, next) {
      return res.render('pages/links', {
        layout: 'layouts/layout'
      });
    },

    'topics': function (req, res, next) {
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
    },

    'users': function (req, res, next) {
      return res.render('pages/users', {
        layout: 'layouts/layout'
      });
    },

    'log-in': function (req, res, next) {
      return res.render('pages/login', {
        layout: 'layouts/layout'
      });
    },

    'sign-up': function (req, res, next) {
      return res.render('pages/signup', {
        layout: 'layouts/layout'
      });
    },

    'search': function (req, res, next) {
      return res.render('pages/search', {
        layout: 'layouts/layout'
      });
    },

    'search-query': function (req, res, next) {
      console.log(req.params.query);
      return res.render('pages/search-query', {
        layout: 'layouts/layout',
        'query': req.params.query
      });
    }
  };
};
