'use strict';

var config = require('../config');
var stateManager = require('../core/state_manager');
var navView = require('../../../apps/nav/nav_view');
var footerView = require('../../../apps/footer/footer_view');
var homeView = require('../../../apps/home/home_view');
var aboutView = require('../../../apps/about/about_view');
var linksView = require('../../../apps/links/links_view');
var usersView = require('../../../apps/users/users_view');
var topicsView = require('../../../apps/topics/topics_view');
var loginView = require('../../../apps/login/login_view');
var signupView = require('../../../apps/signup/signup_view');
var searchView = require('../../../apps/search/search_view');

var simpleView = function (view) {
  return stateManager.stateManage([
    navView,
    footerView,
    view
  ]);
};

module.exports = function (router) {

  router.on('route:index', function () {
    simpleView(homeView);
  });

  router.on('route:about', function () {
    simpleView(aboutView);
  });

  router.on('route:links', function () {
    simpleView(linksView);
  });

  router.on('route:topics', function () {
    simpleView(topicsView);
  });

  router.on('route:users', function () {
    simpleView(usersView);
  });

  router.on('route:log-in', function () {
    simpleView(loginView);
  });

  router.on('route:sign-up', function () {
    simpleView(signupView);
  });

  router.on('route:search', function () {
    simpleView(searchView);
  });

  router.on('route:search-query', function (query) {
    config.currentQuery = query;
    simpleView(searchView);
  });

};
