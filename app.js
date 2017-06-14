'use strict'

var items = [];

function PortfolioItem(portfolioDataObj){
  this.name = portfolioDataObj.name;
  this.url = portfolioDataObj.url;
  this.img = portfolioDataObj.img;
  this.title = portfolioDataObj.title;
  this.description = portfolioDataObj.description;
}

portfolioData.forEach(function(itemObj) {
  items.push(new PortfolioItem(itemObj));
});
