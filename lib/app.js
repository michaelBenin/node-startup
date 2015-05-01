// http://www.martenc.com/2013/06/08/nodejs-express-handlebars/
'use strict';

var env = process.env.NODE_ENV;
if (!env) {
  console.warn('process.env.NODE_ENV is defaulting to development');
  process.env.NODE_ENV = 'development';
  env = 'development';
}
var _ = require('lodash');
var settings = require('./config/settings');
var express = require('express');
var compression = require('compression')();
var bodyParser = require('body-parser');
var errorHandler = require('errorhandler')();
var cookieParser = require('cookie-parser')();
var urlencoded = bodyParser.urlencoded({
  extended: true
});
var json = bodyParser.json();
var http = require('http');
var https = require('http');
var app = express();
var hbs = require('hbs');
var path = require('path');
// var jwt = require('express-jwt');

//break this out into a util
var clientConfig = _.pick(
  settings,
  settings.clientConfig
);

var Backbone = require('backbone');
require('./services/sync_server');
require('../shared/utils/util').backbone(Backbone);
require('./util/helpers')(hbs);
require('./util/hbs-config')(hbs, settings.partials);

app.use(compression);
app.locals.config = clientConfig;
app.locals.debug = (env === 'development' || env === 'local');
/*
 app.use('/api', jwt({
 secret: 'secret'
 }));
 */
app.use(json);
app.use(urlencoded);
//app.use(require('express-bunyan-logger')());
app.use(cookieParser);
app.use(errorHandler);
settings.staticFiles.forEach(function(files) {
  app.use(express['static'](path.resolve(__dirname, files)));
});
app.set('view engine', 'hbs');
app.set('views', settings.views);
app.set('staticUrl', settings.staticUrl);

var router = require('./services/router_service');
app.use('/', router);

var server = http.createServer(app).listen(settings.port, settings.hostname, function() {
  var websocket = require('./services/websocket');
  websocket.on('connection', function(socket) {
    console.log('Server socket connected on port 3000.');
    socket.on('message', function(data) {
      console.log(data);
    });
    socket.send('Server connection sending data');
    socket.on('close', function() {
      console.log('Websocket connection closed..');
    });
  });
  console.log('\n Listening on: ' + settings.hostname + ':' + settings.port);
});

var gracefulShutdown = function() {
  console.log('Received kill signal, shutting down gracefully.');
  server.close(function() {
    console.log('Closed out remaining connections.');
    process.exit();
    process.kill(process.pid, 'SIGUSR2');
  });

  // if after
  setTimeout(function() {
    console.error('Could not close connections in time, forcefully shutting down');
    process.exit();
  }, 10 * 1000);
};

if (env === 'staging' || env === 'production') {
  // listen for TERM signal .e.g. kill
  process.on('SIGTERM', gracefulShutdown);
  // listen for INT signal e.g. Ctrl-C
  process.on('SIGINT', gracefulShutdown);
  process.once('SIGUSR2', gracefulShutdown);
}

exports.server = server;
exports.app = app;
