'use strict';
// https://d2367rbupm857a.cloudfront.net/api
// https://d2367rbupm857a.cloudfront.net/api/documents/search?ref=U5dAajkAADMAOMQ1#format=json
// https://d2367rbupm857a.cloudfront.net/api/documents/search?ref=U5dAajkAADMAOMQ1&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22U5c9BDkAACwAOL1k%22%29+%5D%5D

var Checkit = require('checkit');
var validateLink = new Checkit({
  title: 'required',
  url: 'required'
});

var Backbone = require('backbone');
// TODO: Add checkit
var Link = Backbone.Model.extend({
  defaults: {
    title: '',
    url: ''
  },
  validate: function () {
    return validateLink.run(this.toJSON());
  }
});

module.exports = Link;
