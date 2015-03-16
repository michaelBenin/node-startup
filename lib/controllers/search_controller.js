'use strict';

function searchController(req, res, next) {
  return res.render('pages/search', {
    layout: 'layouts/layout'
  });
}

module.exports = searchController;
