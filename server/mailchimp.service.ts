const rp = require('request-promise');
const md5 = require('md5');

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
    }

    checkSubscriberByEmail() {
        const options = {
            url: 'https://us8.api.mailchimp.com/3.0/lists/74a478b46d/members/' + md5(this.email),
            method: 'GET',
            headers: {
                'Authorization': 'Basic ' + process.env.MAILCHIMP_API_KEY
            }
        }
        return rp(options);
    }
}
