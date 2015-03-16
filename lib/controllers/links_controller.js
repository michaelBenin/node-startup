'use strict';

function linksController(req, res, next) {
  return res.render('pages/links', {
    layout: 'layouts/layout'
  });
}

module.exports = linksController;
