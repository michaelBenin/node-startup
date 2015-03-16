'use strict';

function aboutController(req, res, next) {
  return res.render('pages/about', {
    layout: 'layouts/layout'
  });
}

module.exports = aboutController;
