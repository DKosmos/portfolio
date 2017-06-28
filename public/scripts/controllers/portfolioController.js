'use strict';
var app = app || {};

(function(module) {
  const portfolioController = {};
  portfolioController.fetchAll = () => {
    app.PortfolioItem.fetchAll();
    $('.content').hide();
    $('.portfolio').show();
  };
  portfolioController.home = () => {
    app.PortfolioItem.fetchAll();
    $('.content').hide();
    $('.home').show();
  }

  module.portfolioController = portfolioController;
})(app);
