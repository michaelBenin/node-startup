'use strict';

var _ = require('lodash');
//var BackboneMONGO = require('backbone-mongo');
var Base = require('./../../shared/models/links/links_base');
var Link = require('../../../server/models/link_server');
var SETTINGS = require('../config/settings');

var Links = Base.fullExtend({
  model: Link,
  urlRoot: 'mongodb://Michael-Benins-MacBook-Air.local:27017/Links'
});

//Links.prototype.sync = BackboneMONGO.sync(Links);

module.exports = Links;
