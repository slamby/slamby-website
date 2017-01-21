'use strict';

const path = require('path');
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const compression = require('compression');

// Lead Service import
import { CreateLead } from './create-lead';
import { MailchimpService } from './mailchimp.service';

const app = express();

app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
  extended: true
}));

const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 3000 : 80;

// Enable CORS for development mode.
if (isDeveloping) {
    app.use(function(req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        next();
    });
}

// gzip enabled
app.use(compression());

// Set assets folder to be static.
app.use('/assets', express.static(path.join(__dirname, '../dist/assets')));

// Api route for lead service.
app.post('/api/create-lead', function (req, res) {
    const createLead = new CreateLead(
        req.body.FIRST_NAME,
        req.body.LAST_NAME,
        req.body.ORGANIZATION_NAME,
        req.body.MOBILE_PHONE_NUMBER,
        req.body.EMAIL_ADDRESS,
        req.body.WEBSITE
    );
    createLead.Create().then(function () {
        res.status(200);
        res.send('{"msg":"Lead created"}');
    })
    .catch(function (err) {
        res.status(err.statusCode);
        res.send('{"msg":"Something went wrong"}');
    });
})

// API route for Mailchimp service;
app.post('/api/newsletter/subscribe', function (req, res) {
    const mailchimpService = new MailchimpService(
        req.body.email,
        req.body.firstName,
        req.body.lastName
    );
    mailchimpService.AddToList().then(function(){
        res.status(200);
        res.send('{"msg":"Success"}');
    }).catch(function (err) {
        res.status(err.statusCode);
        res.send('{"msg":"Lead already on the list"}');
    })
})

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, '0.0.0.0', function (err) {
    if (err) {
        console.log(err);
    }
    console.log('Server is running on localhost at port: %s', port);
});
