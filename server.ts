var path = require('path');
import * as glob from 'glob';
var express = require('express');
var connect = require('connect');
var http = require('http');
var bodyParser = require('body-parser');

const isDeveloping: boolean = process.env.NODE_ENV !== 'production';
const port: number = isDeveloping ? 3000 : 80;
const app = express();

//gzip enabled
app.use(connect.compress());

//Body Parsing.
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

var oneDay = 86400000;

app.use('/fonts', express.static(path.join(__dirname,'./build/fonts'),{maxAge: oneDay}));
app.use('/images', express.static(path.join(__dirname,'./build/images'),{maxAge: oneDay}));

app.get('/bundle.js', (req, res) => {
    res.sendFile(path.join(__dirname, './build/bundle.js'),{maxAge: oneDay});
});

app.get('/polyfill.js', (req, res) => {
    res.sendFile(path.join(__dirname, './build/polyfill.js'),{maxAge: oneDay});
});

app.get('/google-analytics.js', (req, res) => {
    res.sendFile(path.join(__dirname, './build/google-analytics.js'),{maxAge: oneDay});
});

app.get('/style.css', (req, res) => {
    res.sendFile(path.join(__dirname, './build/style.css'),{maxAge: oneDay});
});

app.get('/favicon.png', (req, res) => {
    res.sendFile(path.join(__dirname, './build/favicon.png'),{maxAge: oneDay});
});

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, './build/index.html'),{maxAge: oneDay});
});

app.listen(port, '0.0.0.0', (err) => {
    if (err) {
        console.log(err);
    }
    console.info('Server is running on localhost at port: %s', port);
});