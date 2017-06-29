'use strict'

var app = app || {};

(function(module) {

  function PortfolioItem(portfolioDataObj){
    Object.keys(portfolioDataObj).forEach(key => this[key] = portfolioDataObj[key]);
  }

  PortfolioItem.all = [];

  PortfolioItem.prototype.toHtml = function() {
    var template = $('#portfolio-template').html();
    var renderTemplate = Handlebars.compile(template);
    return renderTemplate(this);
  }

  PortfolioItem.loadAll = function(rawData){
    this.all = rawData.map(obj => new PortfolioItem(obj));
    this.all.map(obj => $('.portfolio').append(obj.toHtml()));
  };

  PortfolioItem.fetchAll = () => {
    if(localStorage.rawData){
      PortfolioItem.loadAll(JSON.parse(localStorage.rawData));
    } else {
      $.getJSON('../scripts/portfolioItems.json').then( data => {
        localStorage.rawData = JSON.stringify(data);
        PortfolioItem.loadAll(data);
      })
    }
  }

  PortfolioItem.itemNames = () => {
    return PortfolioItem.all.map(item => item.name)
    .reduce(function(acc,cur) {
      (acc.includes(cur)) ? console.log('duplicate: ', cur):acc.push(cur);
    }, []);
  }

  $('div.icon-menu').on('click', function(){
    $('.navbar').toggleClass('hidden');
  })

  module.PortfolioItem = PortfolioItem;
})(app);
