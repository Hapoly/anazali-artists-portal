const express = require('express')
const config = require('./config.js')
const app = express()


/* including the controllers */
const auth = require('./api/auth.js');

/* databse initialization */
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var url = 'mongodb://localhost:27017/test';
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server.");

  /* Auth */
  app.get('/register',  auth.register);
  app.get('/login',     auth.login);

  app.listen(config.server_port, function () {
    console.log('API server started on port ' + config.server_port)
  })
  
  db.close();
});