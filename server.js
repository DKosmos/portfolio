'use strict';

const express = require('express');
const fs = require('fs');
const app = express();
const bodyParser = require('body-parser').urlencoded({extended: true});
const requestProxy = require('express-request-proxy');
const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));

function proxyGitHub(request, response) {
  console.log('Routing GitHub request for', request.params[0]);
  (requestProxy({
    url: `https://api.github.com/${request.params[0]}`,
    headers: {Authorization: `token ${process.env.GITHUB_TOKEN}`}
  }))(request, response);
}

// REVIEW: This is a new route that will utilize our middle man proxy.
app.get('/github/*', proxyGitHub);

app.listen(PORT, function(){
  console.log('You are on port:', PORT);
});

app.use(function(req, res, next){
  res.status(404).send('404 File not found');
});
