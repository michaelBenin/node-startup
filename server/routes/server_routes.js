'use strict';

var routes = require('./../../shared/routes/router_config');

module.exports = function (app) {
  var routerHandler = require('./page_routes')(app);
  for (var route in routes) {
    if (routes.hasOwnProperty(route)) {
      if (!routerHandler[routes[route]]) {
        console.log(route + ' is not defined in server/router/router.js.');
      } else {
        if (route === '') {
          app.get('/', routerHandler[routes[route]]);
        } else {
          app.get('/' + route, routerHandler[routes[route]]);
        }
      }
    }
  }
};
