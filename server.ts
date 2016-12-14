var path = require('path');
var express = require('express');
var connect = require('connect');
var http = require('http');
var bodyParser = require('body-parser');
var compression = require('compression');

const isDeveloping: boolean = process.env.NODE_ENV !== 'production';
const port: number = isDeveloping ? 3000 : 80;
const app = express();

//gzip enabled
app.use(compression());

//One Day
var oneDay = 86400000;

//Body Parsing.
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//app.use('/fonts', express.static(path.join(__dirname,'./build/fonts'),{maxAge: oneDay}));
//app.use('/images', express.static(path.join(__dirname,'./build/images'),{maxAge: oneDay}));

app.get('/bundle.js', (req, res) => {
    res.sendFile(path.join(__dirname, './build/bundle.js'));
});

app.get('/bundle.min.js', (req, res) => {
    res.sendFile(path.join(__dirname, './build/bundle.js'));
});

app.get('/zone.js', (req, res) => {
    res.sendFile(path.join(__dirname, './build/zone.js'),{maxAge: oneDay});
});

app.get('/Reflect.js', (req, res) => {
    res.sendFile(path.join(__dirname, './build/Reflect.js'),{maxAge: oneDay});
});

app.get('/site.css', (req, res) => {
    res.sendFile(path.join(__dirname, './build/site.css'),{maxAge: oneDay});
});

app.get('/favicon.png', (req, res) => {
    res.sendFile(path.join(__dirname, './build/favicon.png'),{maxAge: oneDay});
});

app.get('/slamby-logo.woff', (req, res) => {
    res.sendFile(path.join(__dirname, './build/slamby-logo.woff'),{maxAge: oneDay});
});

app.use('/assets', express.static(path.join(__dirname,'./assets'),{maxAge: oneDay}));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, './build/index.html'),{maxAge: oneDay});
});

app.listen(port, '0.0.0.0', (err) => {
    if (err) {
        console.log(err);
    }
    console.info('Server is running on localhost at port: %s', port);
});