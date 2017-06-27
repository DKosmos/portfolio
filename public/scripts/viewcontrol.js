'use strict'

var app = app || {};

(function(module) {
  var portfolioView = {};

  portfolioView.handleMainNav = function() {
    $('.navbar .tab').click(function(){
      var content = $(this).attr('data-content');
      $('.content').each(function(){
        if($(this).hasClass(content)){
          $(this).show();
        } else {
          $(this).hide();
        }
      });
    });
  }

  $(document).ready(function(){
    portfolioView.handleMainNav();
  })

  module.portfolioView = portfolioView;
})(app);
