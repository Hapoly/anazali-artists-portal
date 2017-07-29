var express = require('express'),
  app = express(),
  port = process.env.PORT || 9090;

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);