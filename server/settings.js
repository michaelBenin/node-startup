'use strict';

var _ = require('underscore');
//TODO: add in credentials that is ignored, add in logging settings

var settings = {

  BASE: {
    DEBUG: (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'local'),
    WEBSOCKET_PORT: 3000,
    PORT: 8000,
    HOSTNAME: '127.0.0.1',
    PID: '/',
    VIEWS: __dirname + '/views',
    STATIC_FILES: [
      '../built/static',
      '../built/test'
    ],
    STATIC_URL: '/',
    CLIENT_LOG: '../client.log',
    SERVER_LOG: '../server.log',
    PARTIALS: [
      __dirname + '/../shared/partials/*.hbs',
      __dirname + '/views/partials/*.hbs',
      __dirname + '/views/partials/test/*.hbs',
      __dirname + '/../apps/**/*.hbs'
    ],
    OFFLINE_URL: '/connection-test',
    DB: 'postgres',
    DB_IP: 'localhost',
    DB_PORT: 27017,
    DB_USERNAME: 'username',
    PASSWORD: 'password',
    ROTTEN_TOMATOES: '5dnbz4jmd8ta2wvw26agdn7t', // http://developer.rottentomatoes.com/docs
    FACEBOOK_ID: '670457303026219',
    PRISMIC: {
      // -- API endpoint
      apiEndpoint: 'https://d2367rbupm857a.cloudfront.net/api'
        // -- Access token if the Master is not open
        // accessToken: 'xxxxxx',
        // -- OAuth
        // clientId: 'xxxxxx',
        // clientSecret: 'xxxxxx'
    }
  },

  LOCAL: {

  },

  DEVELOPMENT: {},

  STAGING: {},

  PRODUCTION: {}

};

module.exports = _.extend({}, settings.BASE, settings[process.env.NODE_ENV]);
