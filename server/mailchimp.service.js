"use strict";
var rp = require('request-promise');
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
                'Authorization': 'Basic U2xhbWJ5OmZkOGQ0ODliZmEyMGZhYmRmNjc2MzI0OTg3Nzc2NDM0LXVzOA==',
                'Content-Type': 'application/json'
            },
            form: {
                'email_address': this.email,
                'status': 'subscribed',
                'merge_fields': {
                    'FNAME': this.firstName,
                    'LNAME': this.lastName
                }
            }
        };
        return rp(options);
    };
    return MailchimpService;
}());
exports.MailchimpService = MailchimpService;
