'use strict';
// https://d2367rbupm857a.cloudfront.net/api
// https://d2367rbupm857a.cloudfront.net/api/documents/search?ref=U5dAajkAADMAOMQ1#format=json
// https://d2367rbupm857a.cloudfront.net/api/documents/search?ref=U5dAajkAADMAOMQ1&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22U5c9BDkAACwAOL1k%22%29+%5D%5D
var Backbone = require('backbone');

var Link = Backbone.Model.extend({
  defaults: {
    title: '',
    url: ''
  },
  validation: {
    'title': {
      required: true,
      msg: 'Please enter a title'
    },
    'url': {
      pattern: 'url',
      required: true,
      msg: 'Please enter a url'
    }
  }
});

module.exports = Link;
