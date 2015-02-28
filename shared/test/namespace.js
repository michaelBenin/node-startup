'use strict';

var Backbone = require('backbone');
var expect = require('chai').expect;

module.exports = function (mocha) {

  describe('Backbone namespace', function () {

    it('Backbone Validation should have a version', function () {
      expect(Backbone.Validation.version).to.equal('0.11.3');
    });

    // https://github.com/PaulUithol/Backbone-relational/issues/482
    /*
    it('Backbone Relational should exist', function () {
      expect(typeof Backbone.Relational).to.equal('object');
    });
    */

    it('Backbone model should have fullExtend', function () {
      expect(typeof Backbone.Model.fullExtend).to.equal('function');
    });

  });
};
