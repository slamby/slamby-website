'use strict';
var path = require('path');
var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var compression = require('compression');
// Lead Service import
var create_lead_1 = require("./create-lead");
var mailchimp_service_1 = require("./mailchimp.service");
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
var isDeveloping = process.env.NODE_ENV !== 'production';
var port = isDeveloping ? 3000 : 80;
// Enable CORS for development mode.
if (isDeveloping) {
    app.use(function (req, res, next) {
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
    var createLead = new create_lead_1.CreateLead(req.body.FIRST_NAME, req.body.LAST_NAME, req.body.ORGANIZATION_NAME, req.body.MOBILE_PHONE_NUMBER, req.body.EMAIL_ADDRESS, req.body.WEBSITE);
    createLead.Create().then(function () {
        res.status(200);
        res.send('{"msg":"Lead created"}');
    })["catch"](function (err) {
        if (err.statusCode) {
            res.status(err.statusCode);
            res.send('{"msg":"' + err.message + '"}');
        }
        else {
            res.status(500);
            res.send('{"msg":"Connection Error"}');
        }
    });
});
// API route for Mailchimp service;
app.post('/api/newsletter/subscribe', function (req, res) {
    var mailchimpService = new mailchimp_service_1.MailchimpService(req.body.email, req.body.firstName, req.body.lastName);
    mailchimpService.AddToList().then(function () {
        res.status(200);
        res.send('{"msg":"Success"}');
    })["catch"](function (err) {
        if (err.statusCode) {
            res.status(err.statusCode);
            res.send('{"msg":"' + err.message + '"}');
        }
        else {
            res.status(500);
            res.send('{"msg":"' + err.message + '"}');
        }
    });
});
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});
app.listen(port, '0.0.0.0', function (err) {
    if (err) {
        console.log(err);
    }
    console.log('Server is running on localhost at port: %s', port);
});
