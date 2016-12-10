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

//Static folders
app.use('/build', express.static(__dirname + '/src/build'));
app.use('/assets', express.static(__dirname + '/src/assets'));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '/src/build/index.html'));
});

app.listen(port, '0.0.0.0', (err) => {
    if (err) {
        console.log(err);
    }
    console.info('Server is running on localhost at port: %s', port);
});