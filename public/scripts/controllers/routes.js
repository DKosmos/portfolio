'use strict';

var app = app || {};

page('/', app.portfolioController.home);
page('/about', app.aboutController.about);
page('/portfolio', app.portfolioController.fetchAll);
page();
