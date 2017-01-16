"use strict";

var path = require('path');
var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var compression = require('compression');
var isDeveloping = process.env.NODE_ENV !== 'production';
var port = isDeveloping ? 3000 : 80;

var app = express();

//gzip enabled
app.use(compression());

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, './dist/index.html'));
});

app.listen(port, '0.0.0.0', function (err) {
    if (err) {
        console.log(err);
    }
    console.info('Server is running on localhost at port: %s', port);
});
