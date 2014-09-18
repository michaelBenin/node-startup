'use strict';

var enquire = require('enquire.js');

module.exports = {

  device: null,

  initDevice: function () {
    var self = this;
    enquire
      .register('only screen and (min-width: 1025px)', function () {
        self.setDevice('desktop');
      })
      .register('only screen and (min-width : 768px) and (max-width : 1024px)', function () {
        self.setDevice('tablet');
      })
      .register('only screen and (min-width : 320px) and (max-width : 767px)', function () {
        self.setDevice('mobile');
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
