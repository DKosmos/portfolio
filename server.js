'use strict';

const express = require('express');
const fs = require('fs');
const app = express();
const bodyParser = require('body-parser').urlencoded({extended: true});
const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));

app.listen(PORT, function(){
  console.log('You are on port:', PORT);
});

app.use(function(req, res, next){
  res.status(404).send('404 File not found');
});
