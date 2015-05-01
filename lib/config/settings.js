'use strict';

var _ = require('lodash');
var path = require('path');
var join = path.join;
// TODO: add in credentials as environment variables
// that are ignored, add in logging settings

var settings = {

  base: {
    clientConfig: [
      'mobileApp',
      'offlineUrl',
      'debug',
      'staticUrl',
      'websocket',
      'googleAnalyticsId'
    ],
    redisHost: '127.0.0.1',
    redisPort: 6379,
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
    pm2WebInterface: 'localhost:9615',
    websocket: 'ws://localhost:3000',
    websocketPort: 3000,
    googleAnalyticsId: 'UA-000000-0'
  },

  staging: {},

  production: {
    redisHost: '127.0.0.1',
    redisPort: 6379,
    pm2WebInterface: '/api/pm2-http-interface',
    websocket: 'ws://linkwaylive.com/socket.io',
    websocketPort: 3000,
    googleAnalyticsId: 'UA-45063514-1'
  }

};

console.log(process.env.NODE_ENV);

settings = _.extend({}, settings.base, settings[process.env.NODE_ENV]);

module.exports = settings;
