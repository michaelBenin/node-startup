'use strict';

var _ = require('underscore');
var $ = require('jquery');

module.exports = {

  collectionViewOn: function (Childview, elements, collection) {
    var views = [];
    _.each(elements, function (el, index) {
      var childview = new Childview({
        'model': collection.at(index)
      });
      childview.setElement($(el));
      childview.on();
      views.push(childview);
    });
    return views;
  },

  collectionViewOff: function (views) {

    _.each(views, function (view) {
      view.off();
    });

    return this;
  }
};
