"use strict";
var rp = require('request-promise');
var CreateLead = (function () {
    function CreateLead(firstName, lastName, orgName, mobileNumber, email, website, description) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.orgName = orgName;
        this.mobileNumber = mobileNumber;
        this.email = email;
        this.website = website;
        this.description = description;
    }
    CreateLead.prototype.Create = function () {
        var options = {
            url: 'https://api.insight.ly/v2.1/Leads',
            method: 'POST',
            headers: {
                'Authorization': 'Basic ' + process.env.CRM_API_KEY,
                'Content-Type': 'application/json'
            },
            form: {
                'FIRST_NAME': this.firstName,
                'LAST_NAME': this.lastName,
                'ORGANIZATION_NAME': this.orgName,
                'MOBILE_PHONE_NUMBER': this.mobileNumber,
                'EMAIL_ADDRESS': this.email,
                'WEBSITE_URL': this.website,
                'VISIBLE_TO': 'EVERYONE',
                'LEAD_DESCRIPTION': this.description
            }
        };
        return rp(options);
    };
    return CreateLead;
}());
exports.CreateLead = CreateLead;
