'use strict';
// SEE http://webdriver.io/docs.html
var expect = require('chai').expect;
var config = require('../config');

console.log('test');
describe('Logged out tests.', function () {

  describe('Page testing', function () {
    it('Page title test.', function (done) {
      browser
        .url('http://' + config.base_url)
        .getTitle(function (err, title) {
          expect(title).to.equal('node-startup');
        })
        .end(done);
    });
  });

});
