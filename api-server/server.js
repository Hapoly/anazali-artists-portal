const express = require('express')
const config = require('./config.js')
const bodyParser = require('body-parser');
const app = express()

app.use(bodyParser.json());

/* including the controllers */
const auth = require('./api/auth.js');

/* databse initialization */
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var url = 'mongodb://localhost:27017/artist';
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server.");

  /* Auth */
  app.post('/register', function(req, res){
    console.log(req.body);      // your JSON
    res.send(req.body);
    //auth.register(req, res, db);
  });
  app.get('/login', function(res, req, db){
    auth.login(req, res, db);
  });

  app.listen(config.server_port, function () {
    console.log('API server started on port ' + config.server_port)
  })

  db.close();
});