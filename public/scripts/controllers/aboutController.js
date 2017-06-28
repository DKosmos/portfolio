'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};

  aboutController.about = function () {
    $('.content').hide();
    $('.about').show();
    app.repo.requestRepos(app.repoView.index);
  };

  module.aboutController = aboutController;
})(app);
