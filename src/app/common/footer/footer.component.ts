import { Component } from '@angular/core';
import { NewsletterService } from './newsletter.service';
import {Observable} from 'rxjs/Rx';

@Component({
    selector: 'pm-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    providers: [NewsletterService]
})

export class FooterComponent {

    constructor(private newsletterService: NewsletterService) {}

    // tslint:disable-next-line:member-ordering
    newsLetterDetails = {
        email: '',
        firstName: 'Friend',
        lastName: ''
    };

    submitted: boolean = false;
    isSuccess: boolean = false;
    message: string = 'Be in the know with the latest and greatest from Slamby.';

    subscibe() {
        this.newsletterService.checkSubscriptionStatus(this.newsLetterDetails.email).subscribe(
            res => {
                // 200 ok means already existing email id. Set status code to 2.
                this.message = 'You have already signed up!';
                this.isSuccess = false;
            }, err => {
                // 404 not found means, email id is new. Let's add it.
                this.newsletterService.createLead(this.newsLetterDetails).subscribe(
                    res => {
                        // Succesfully added!
                        this.message = 'Thank You';
                        this.isSuccess = true;
                    }, err => {
                        // Error occured.
                        this.message = 'An error occured. Please try again.';
                        this.isSuccess = false;
                    }
                );
            }
        );
    }

    // tslint:disable-next-line:member-ordering
    year = new Date().getFullYear();

    socialLinks = [
        {'name': 'Facebook', 'link': 'https://www.facebook.com/slambynews', 'class': 'fa-facebook-f'},
        {'name': 'Twitter', 'link': 'https://twitter.com/slambynews', 'class': 'fa-twitter'},
        {'name': 'LinkedIn', 'link': 'https://www.linkedin.com/company/slamby', 'class': 'fa-linkedin'},
        {'name': 'Instagram', 'link': 'https://www.instagram.com/slambynews/', 'class': 'fa-instagram'},
        {'name': 'YouTube', 'link': 'https://www.youtube.com/channel/UCQ6UfPZshXDIXT0zi3xRyHQ', 'class': 'fa-youtube-play'}
    ]
}