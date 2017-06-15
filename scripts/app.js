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
  var $newItem = $('article.template').clone();
  $newItem.removeClass('template');
  $newItem.data('category', this.title);

  $newItem.find('.portfolioitem h2').html(this.name);
  $newItem.find('.portfolioitem a').html(this.url);
  $newItem.find('.portfolioitem a').attr('href', this.url);
  $newItem.find('.portfolioitem img').attr('src', this.img);
  $newItem.find('.portfolioitem p').html(this.description);

  $newItem.append('<hr>');
  return $newItem;
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
