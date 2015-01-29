'use strict';

module.exports = {
  env: {
    options: {
      //Shared Options Hash
    },
    dev: {
      NODE_ENV: 'development'
    },
    jenkins: {
      NODE_ENV: 'development'
    },
    stg: {
      NODE_ENV: 'staging'
    },
    prod: {
      NODE_ENV: 'staging'
    }
  }
};
