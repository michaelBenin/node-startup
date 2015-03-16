'use strict';

var glob = require('glob');

function setRoutes(globDir, router) {

  glob.sync(globDir)
    .map(require)
    .forEach(function setRoute(routeFunc) {
      routeFunc(router);
    });

}

module.exports = setRoutes;
