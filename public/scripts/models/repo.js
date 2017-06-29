'use strict';
var app = app || {};

(function(module) {
  const repo = {};
  repo.all = [];

  repo.requestRepos = function(callback) {
    $.ajax({
      url: 'https://api.github.com/users/DKosmos/repos',
      method: 'GET',
      headers: {Authorization: `token ${process.env.GITHUB_TOKEN}`}})
    .then(data => {
      repo.all = data;
      callback();
    });
  };

  repo.with = attr => repo.all.filter(repo => repo[attr]);

  module.repo = repo;
})(app);
