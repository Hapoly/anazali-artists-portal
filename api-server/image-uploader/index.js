var express = require('express');
var corsPrefetch = require('cors-prefetch-middleware');
var imagesUpload = require('images-upload-middleware');

app.use('/static', express.static('./server/static'));
app.use(corsPrefetch);

app = express();
port = process.env.PORT || 9090;

app.post('/notmultiple', imagesUpload(
    './server/static/files',
    'http://localhost:9090/static/files'
));
app.listen(port);

console.log('todo list RESTful API server started on: ' + port);

