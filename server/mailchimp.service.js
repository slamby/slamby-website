"use strict";
var rp = require('request-promise');
var md5 = require('md5');
var MailchimpService = (function () {
    function MailchimpService(email, firstName, lastName) {
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    MailchimpService.prototype.AddToList = function () {
        var options = {
            url: 'https://us8.api.mailchimp.com/3.0/lists/74a478b46d/members',
            method: 'POST',
            headers: {
                'Authorization': 'Basic ' + process.env.MAILCHIMP_API_KEY,
                'Content-Type': 'application/json'
            },
            body: {
                email_address: this.email,
                status: 'subscribed',
                merge_fields: {
                    FNAME: this.firstName,
                    LNAME: this.lastName
                }
            },
            json: true
        };
        return rp(options);
    };
    MailchimpService.prototype.checkSubscriberByEmail = function () {
        var options = {
            url: 'https://us8.api.mailchimp.com/3.0/lists/74a478b46d/members/' + md5(this.email),
            method: 'GET',
            headers: {
                'Authorization': 'Basic ' + process.env.MAILCHIMP_API_KEY
            }
        };
        return rp(options);
    };
    return MailchimpService;
}());
exports.MailchimpService = MailchimpService;
