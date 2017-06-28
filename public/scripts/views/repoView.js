'use strict';
var app = app || {};

(function(module) {
  const repoView = {};

  const ui = () => {
    let $about = $('.about');
    $('.content').hide();
    $about.show();
  }

  var template = Handlebars.compile($('#repo-template').text());

  repoView.index = () => {
    ui();
    $('.about').append(app.repo.with('name').map(template));
  };

  module.repoView = repoView;
})(app);
