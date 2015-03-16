'use strict';

function usersController(req, res, next) {
  return res.render('pages/users', {
    layout: 'layouts/layout'
  });
}

module.exports = usersController;
