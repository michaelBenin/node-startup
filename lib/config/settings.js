'use strict';

var _ = require('lodash');
var path = require('path');
var join = path.join;
//TODO: add in credentials that is ignored, add in logging settings

var settings = {

  base: {
    debug: (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'local'),
    mobileApp: false,
    port: 8000,
    hostname: '127.0.0.1',
    pid: '/',
    views: join(__dirname, '../views'),
    staticFiles: [
      '../built/static',
      '../built/test'
    ],
    staticUrl: '/',
    clientLog: '../client.log',
    serverLog: '../server.log',
    partials: [
      join(__dirname, '../../shared/partials/*.hbs'),
      join(__dirname, '../views/partials/*.hbs'),
      join(__dirname, '../views/partials/test/*.hbs'),
      join(__dirname, '../../apps/**/*.hbs')
    ],
    offlineUrl: '/connection-test',
    db: 'postgres',
    dbIp: 'localhost',
    dbPort: 27017,
    dbUsername: 'username',
    password: 'password',
    facebookId: '670457303026219'
  },

  development: {
    websocket: 'ws://localhost:3000',
    websocketPort: 3000
  },

  staging: {},

  production: {
    websocket: 'ws://linkwaylive.com/engine.io',
    websocketPort: 3000
  }

};

console.log(process.env.NODE_ENV);

settings = _.extend({}, settings.base, settings[process.env.NODE_ENV]);

module.exports = settings;
