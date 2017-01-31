const rp = require('request-promise');

export class CreateLead {
    constructor(
        public firstName: string,
        public lastName: string,
        public orgName: string,
        public mobileNumber: string,
        public email: string,
        public website: string,
        public description: string
    ) {}

    Create() {
        const options = {
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
    }
}
