'use strict';

function indexController(req, res, next) {

  var indexModel = {
    layout: 'layouts/layout',
    title: 'testing it',
    content: 'test',
    list: [{
      title: 'test',
      url: 'http://linkwaylive.com'
    }, {
      title: 'test2',
      url: 'http://test.com'
    }]
  };

  return res.render('pages/index', indexModel);
}

module.exports = indexController;
