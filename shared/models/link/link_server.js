'use strict';

var _ = require('underscore');
var Base = require('./article_base');
var SETTINGS = require('../../../server/settings');

var Link = Base.fullExtend({
  urlRoot: 'mongodb://Michael-Benins-MacBook-Air.local:27017/articles'
  //urlRoot: SETTINGS.DB + '://' + SETTINGS.DB_IP + ':' + SETTINGS.DB_PORT + '/articles'
});

//Article.prototype.sync = BackboneMONGO.sync(Article);

module.exports = Link;
