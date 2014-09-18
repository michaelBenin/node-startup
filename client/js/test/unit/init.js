'use strict';

var expect = require('chai').expect;

describe('Testing tests.', function () {

  it('will equal equal, I HOPE!', function () {
    expect('equal').to.equal('equal');
  });

});

require('../core/state_manager');
