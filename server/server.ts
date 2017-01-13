// todo: use webpack for server file packaging.

var path = require('path');
var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var compression = require('compression');

import { CreateLead } from './createLead';

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

app.use('/build', express.static(path.join(__dirname,'../build')));

app.use('/assets', express.static(path.join(__dirname,'../assets'),
    {maxAge: oneDay}));

// CRM Lead generation test integration.
// todo: check and fix this for production.
app.get('/api/create-lead', function (req, res) {
    let createLead = new CreateLead(
        req.query.firstName,
        req.query.lastName,
        req.query.orgName,
        req.query.mobileNumber,
        req.query.email,
        req.query.website
    );
    createLead.Create().then(function () {
        res.status(200);
        res.send("ok");
    })
    .catch(function (err) {
        res.status(400);
        res.send("Something went wrong");
    });
})

app.get('/*', (req, res) => {res.sendFile(path.join(__dirname,      
    '../build/index.html'), {maxAge: oneDay});
});

app.listen(port, '0.0.0.0', (err) => {
    if (err) {
        console.log(err);
    }
    console.info('Server is running on localhost at port: %s', port);
});