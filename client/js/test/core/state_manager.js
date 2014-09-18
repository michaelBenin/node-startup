'use strict';

var expect = require('chai').expect;

var stateManager = require('../../core/state_manager');
var sm = stateManager;

var testView = {

  state: 'off',

  off: function () {
    this.state = 'off';
  },

  on: function () {
    this.state = 'on';
  },

  render: function () {
    this.state = 'rendered';
  }
};

describe('State manager unit tests', function () {

  /*
  it('State Managers initial state should be true.', function () {
    sm.init();
    expect(sm.initialPageLoad).to.equal(true);
  });
  */

  it('After calling init_page_load() initial state should be false.', function () {
    sm.initPageLoad();
    expect(sm.initialPageLoad).to.equal(false);
  });

  it('Current views should have an initial length of 0', function () {
    expect(sm.currentViews).to.have.length(0);
  });

  it('Current views should have an initial length of 0.', function () {
    expect(sm.currentViews).to.have.length(0);
  });

  it('After calling add_view, current views should have a length of 1.', function () {
    sm.addView(testView);
    expect(sm.currentViews).to.have.length(1);
  });

  it('After calling remove_view, current views should have a length of 0.', function () {
    sm.removeView(testView);
    expect(sm.currentViews).to.have.length(0);
  });

  it('After calling undelegate_current_events, current views should have a length of 0 and each eview should be off.', function () {
    sm.addView(testView);
    sm.undelegateCurrentEvents();
    expect(sm.currentViews).to.have.length(0);
    expect(testView.state).to.equal('off');
  });

  it('After calling delegate_current_events, current views should have a length of 1 and each view should be on.', function () {
    sm.addView(testView);
    sm.delegateCurrentEvents();
    expect(sm.currentViews).to.have.length(1);
    expect(testView.state).to.equal('on');
  });

});
