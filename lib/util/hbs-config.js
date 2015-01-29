'use strict';

var fs = require('fs');
var glob = require('glob');

module.exports = function (hbs, partials) {
  partials
    .forEach(function (partialsDir) {
      glob(partialsDir, {}, function (err, files) {
        if (files.length === 0) {
          console.log(partialsDir + ' does not contain any handlebars templates.');
        }
        files.forEach(function (filename) {
          var name = filename.split('/').pop();
          name = name.split('.').shift();
          var template = fs.readFileSync(filename, 'utf8');
          hbs.registerPartial(name, template);
        });
      });
    });
};
