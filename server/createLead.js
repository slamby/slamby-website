"use strict";
var rp = require('request-promise');
var CreateLead = (function () {
    function CreateLead(firstName, lastName, orgName, mobileNumber, email, website) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.orgName = orgName;
        this.mobileNumber = mobileNumber;
        this.email = email;
        this.website = website;
        this.options = {
            url: 'https://api.insight.ly/v2.1/Leads',
            method: 'POST',
            headers: {
                'Authorization': 'Basic NDhjMjY0YTgtZGFlZi00MTUwLTk0ZWEtMTQ2NmU4ZTkxY2QzOg==',
                'Content-Type': 'application/json'
            },
            form: {
                "FIRST_NAME": this.firstName,
                "LAST_NAME": this.lastName,
                "ORGANIZATION_NAME": this.orgName,
                "MOBILE_PHONE_NUMBER": this.mobileNumber,
                "EMAIL_ADDRESS": this.email,
                "WEBSITE_URL": this.website,
                "VISIBLE_TO": "EVERYONE",
                "LEAD_DESCRIPTION": "source from website/ new campaign"
            }
        };
        this.Create = function () {
            return rp(this.options);
        };
    }
    return CreateLead;
}());
exports.CreateLead = CreateLead;
