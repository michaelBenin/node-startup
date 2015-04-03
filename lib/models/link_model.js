'use strict';

var _ = require('lodash');
var Base = require('./article_base');

var Link = Base.fullExtend({
  urlRoot: 'mongodb://Michael-Benins-MacBook-Air.local:27017/articles'
});

//Article.prototype.sync = BackboneMONGO.sync(Article);

module.exports = Link;
