'use strict';

var _ = require('underscore');
//var BackboneMONGO = require('backbone-mongo');
var Base = require('./links_base');
var Link = require('../link/link_server');
var SETTINGS = require('../../../server/settings');

var Links = Base.fullExtend({
  model: Link,
  urlRoot: 'mongodb://Michael-Benins-MacBook-Air.local:27017/Links'
    //urlRoot: SETTINGS.DB + '://' + SETTINGS.DB_IP + ':' + SETTINGS.DB_PORT + '/Links'
});

//Links.prototype.sync = BackboneMONGO.sync(Links);

module.exports = Links;
