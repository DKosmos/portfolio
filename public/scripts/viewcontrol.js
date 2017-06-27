'use strict'

var app = app || {};

(function(module) {
  var portfolioView = {};

  portfolioView.handleMainNav = function() {
    $('.navbar .tab').click( function() {
      $('.content').hide();
      $(`.${$(this).attr('data-content')}`).show();
    });
  }

  $(document).ready(function(){
    portfolioView.handleMainNav();
  })

  module.portfolioView = portfolioView;
})(app);
