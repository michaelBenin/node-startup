'use strict';

var $ = require('jquery');
var Backbone = require('backbone');
var expect = require('chai').expect;

describe('jQuery namespace', function() {

  it('jQuery should have the namespace transition', function() {
    expect(typeof $.Velocity.version).to.equal('object');
  });

});

describe('Backbone namespace', function() {

  it('Backbone should have a local storage property', function() {
    expect(typeof Backbone.LocalStorage).to.equal('function');
  });

  it('Backbone should have an epoxy property', function() {
    expect(typeof Backbone.Epoxy).to.equal('object');
  });

});
