//https://api.github.com/repos/michaelBenin/node-startup

'use strict';

var _ = require('underscore');
var Base = require('../../shared/models/repo/repo_base');
var SETTINGS = require('../config/settings');

var RepoModel = Base.fullExtend({
  requestHeaders: {
    'User-Agent': 'node-startup'
  }
});

module.exports = RepoModel;
