'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};

  aboutController.about = function () {
    $('.content').hide();
    $('.about').show();
  };

  module.aboutController = aboutController;
})(app);
