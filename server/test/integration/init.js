'use strict';

var Backbone = require('backbone');
var expect = require('chai').expect;
var mocha = require('mocha');
require('../../../shared/utils/util').backbone(Backbone);

require('../../../shared/test/namespace')(mocha);

describe('test', function () {

  it('test', function () {
    expect('equal').to.equal('equal');
  });
});
