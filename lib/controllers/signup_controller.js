'use strict';

function signupController(req, res, next) {
  return res.render('pages/signup', {
    layout: 'layouts/layout'
  });
}

module.exports = signupController;
