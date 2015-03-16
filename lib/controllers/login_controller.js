'use strict';

function loginController(req, res, next) {
  return res.render('pages/login', {
    layout: 'layouts/layout'
  });
}

module.exports = loginController;
