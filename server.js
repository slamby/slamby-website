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
//One Day
var oneDay = 86400000;
//Body Parsing.
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use('/build', express.static(path.join(__dirname, './build')));
app.use('/assets', express.static(path.join(__dirname, './assets'), { maxAge: oneDay }));
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, './build/index.html'), { maxAge: oneDay });
});
app.listen(port, '0.0.0.0', function (err) {
    if (err) {
        console.log(err);
    }
    console.info('Server is running on localhost at port: %s', port);
});
