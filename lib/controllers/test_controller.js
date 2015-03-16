'use strict';

function testController(req, res, next) {
  res.render('test/test', {
    layout: 'layouts/test-layout'
  });
}

module.exports = testController;
