'use strict';

var Base = require('./../../../shared/models/links/links_base');
var Link = require('./link_model');

var Links = Base.fullExtend({
  model: Link,
  urlRoot: '/api/homepage/links'
});

module.exports = Links;
