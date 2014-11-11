// http://www.martenc.com/2013/06/08/nodejs-express-handlebars/
'use strict';

var env = process.env.NODE_ENV;
var _ = require('underscore');
var SETTINGS = require('./settings');
require('npid').create(__dirname + SETTINGS.PID + 'express.pid', true);
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
var clientConfig = _.pick(
  SETTINGS,
  'MOBILE_APP',
  'OFFLINE_URL',
  'DEBUG',
  'STATIC_URL'
);

var Backbone = require('backbone');
require('./service/sync_server');
require('../shared/utils/util').backbone(Backbone);
require('./handlebars_helpers/helpers')(hbs);
require('./lib/hbs-config')(hbs, SETTINGS.PARTIALS);

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
SETTINGS.STATIC_FILES.forEach(function (files) {
  app.use(express['static'](path.resolve(__dirname, files)));
});
app.set('view engine', 'hbs');
app.set('views', SETTINGS.VIEWS);
app.set('STATIC_URL', SETTINGS.STATIC_URL);

require('./routes/routes')(app);
require('./routes/server_routes')(app);

var server = http.createServer(app).listen(SETTINGS.PORT, SETTINGS.HOSTNAME, function () {
  var websocket = require('./service/websocket');
  websocket.on('connection', function (socket) {
    console.log('Server socket connected on port 3000.');
    socket.on('message', function (data) {
      console.log(data);
    });
    socket.send('Server connection sending data');
    socket.on('close', function () {
      console.log('Websocket connection closed.');
    });
  });
  console.log('Listening on: ' + SETTINGS.HOSTNAME + ':' + SETTINGS.PORT);
});

var gracefulShutdown = function () {
  console.log('Received kill signal, shutting down gracefully.');
  server.close(function () {
    console.log('Closed out remaining connections.');
    process.exit();
    process.kill(process.pid, 'SIGUSR2');
  });

  // if after
  setTimeout(function () {
    console.error('Could not close connections in time, forcefully shutting down');
    process.exit();
  }, 10 * 1000);
};

if (env === 'jenkins' || env === 'staging' || env === 'production') {
  // listen for TERM signal .e.g. kill
  process.on('SIGTERM', gracefulShutdown);
  // listen for INT signal e.g. Ctrl-C
  process.on('SIGINT', gracefulShutdown);
  process.once('SIGUSR2', gracefulShutdown);
}
