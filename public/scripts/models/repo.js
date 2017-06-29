'use strict';
var app = app || {};

(function(module) {
  const repo = {};
  repo.all = [];

  repo.requestRepos = function(callback) {
    $.get('/github/user/repos')
    .then(data => repo.all = data, err => console.error(err)) // es6 syntax arrow functions
    .then(callback);
  };

  repo.with = attr => repo.all.filter(repo => repo[attr]);

  module.repo = repo;
})(app);
