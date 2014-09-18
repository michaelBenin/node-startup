'use strict';

var Article = require('../article_server');

module.exports = function () {
  var Model = new Article({
    title: 'This is the sample title'
  });

};
