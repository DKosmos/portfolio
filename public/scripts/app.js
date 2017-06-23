'use strict'

function PortfolioItem(portfolioDataObj){
  this.name = portfolioDataObj.name;
  this.url = portfolioDataObj.url;
  this.img = portfolioDataObj.img;
  this.title = portfolioDataObj.title;
  this.description = portfolioDataObj.description;
}

PortfolioItem.all = [];

PortfolioItem.prototype.toHtml = function() {
  var template = $('#portfolio-template').html();
  var renderTemplate = Handlebars.compile(template);
  return renderTemplate(this);
}

PortfolioItem.loadAll = function(rawData){
  rawData.forEach(function(itemObj) {
    PortfolioItem.all.push(new PortfolioItem(itemObj));
  });
  PortfolioItem.all.forEach(function(item) {
    $('.portfolio').append(item.toHtml());
  });
};

PortfolioItem.fetchAll = function() {
  if(localStorage.rawData){
    PortfolioItem.loadAll(JSON.parse(localStorage.rawData));
  } else {
    $.getJSON('./scripts/portfolioitems.json').then(function(data){
      localStorage.rawData = JSON.stringify(data);
      PortfolioItem.loadAll(data);
    })
  }
}

$('div.icon-menu').on('click', function(){
  $('.navbar').toggleClass('hidden');
})
