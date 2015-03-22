'use strict';

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
  validate: function() {
    return validateLink.run(this.toJSON());
  }
});

module.exports = Link;
