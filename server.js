"use strict";
var path = require('path');
var express = require('express');
var connect = require('connect');
var http = require('http');
var bodyParser = require('body-parser');
var isDeveloping = process.env.NODE_ENV !== 'production';
var port = isDeveloping ? 3000 : 80;
var app = express();
//gzip enabled
app.use(connect.compress());
//Body Parsing.
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
var oneDay = 86400000;
app.use('/fonts', express.static(path.join(__dirname, './build/fonts'), { maxAge: oneDay }));
app.use('/images', express.static(path.join(__dirname, './build/images'), { maxAge: oneDay }));
app.get('/bundle.js', function (req, res) {
    res.sendFile(path.join(__dirname, './build/bundle.js'), { maxAge: oneDay });
});
app.get('/style.css', function (req, res) {
    res.sendFile(path.join(__dirname, './build/style.css'), { maxAge: oneDay });
});
app.get('/favicon.png', function (req, res) {
    res.sendFile(path.join(__dirname, './build/favicon.png'), { maxAge: oneDay });
});
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, './build/index.html'), { maxAge: oneDay });
});
app.listen(port, '0.0.0.0', function (err) {
    if (err) {
        console.log(err);
    }
    console.info('Server is running on localhost at port: %s', port);
});
