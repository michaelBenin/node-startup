'use strict';

var enquire = require('enquire.js');

module.exports = {

  device: null,

  // TODO: http://foundation.zurb.com/docs/media-queries.html
  initDevice: function () {
    var self = this;
    enquire

      .register('only screen and (max-width: 40em)', function () {
      self.setDevice('small');
    })

    .register('only screen and (min-width: 40.063em) and (max-width: 64em)', function () {
      self.setDevice('medium');
    })

    .register('only screen and (min-width: 64.063em) and (max-width: 90em)', function () {
      self.setDevice('large');
    })

    .register('only screen and (min-width: 90.063em) and (max-width: 120em)', function () {
      self.setDevice('xlarge');
    })

    .register('only screen and (min-width: 120.063em)', function () {
      self.setDevice('xxlarge');
    });

    return this;
  },

  setDevice: function (size) {
    this.device = size;
  },

  getDevice: function () {
    return this.device;
  }
};
