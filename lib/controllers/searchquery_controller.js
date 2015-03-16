'use strict';

function searchQueryController(req, res, next) {
  return res.render('pages/searchquery', {
    layout: 'layouts/layout'
  });
}

module.exports = searchQueryController;
