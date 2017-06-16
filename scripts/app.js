'use strict'

var items = [];

function PortfolioItem(portfolioDataObj){
  this.name = portfolioDataObj.name;
  this.url = portfolioDataObj.url;
  this.img = portfolioDataObj.img;
  this.title = portfolioDataObj.title;
  this.description = portfolioDataObj.description;
}

PortfolioItem.prototype.toHtml = function() {
  var template = $('#portfolio-template').html();
  var renderTemplate = Handlebars.compile(template);
  return renderTemplate(this);
}

portfolioData.forEach(function(itemObj) {
  items.push(new PortfolioItem(itemObj));
});

items.forEach(function(item) {
  $('.portfolio').append(item.toHtml());
})

$('div.icon-menu').on('click', function(){
  $('.navbar').toggleClass('hidden');
})
