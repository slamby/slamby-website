const rp = require('request-promise');

export class MailchimpService {
    constructor(
        public email: string,
        public firstName: string,
        public lastName: string
    ) {}

    AddToList() {
        const options = {
            url: 'https://us8.api.mailchimp.com/3.0/lists/74a478b46d/members',
            method: 'POST',
            headers: {
                'Authorization': 'Basic U2xhbWJ5OmZkOGQ0ODliZmEyMGZhYmRmNjc2MzI0OTg3Nzc2NDM0LXVzOA==',
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
    }
}
