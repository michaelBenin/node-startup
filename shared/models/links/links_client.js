'use strict';

var Base = require('./links_base');
var Link = require('../link/link_client');

var Links = Base.fullExtend({
  model: Link,
  urlRoot: '/api/homepage/links'
});

module.exports = Links;
