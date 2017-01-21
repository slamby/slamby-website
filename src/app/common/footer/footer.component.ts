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

    isSentSuccess: number = 0;

    addSubscriber() {
        if (this.newsLetterDetails.email.length > 0) {
            this.newsletterService.createLead(this.newsLetterDetails).subscribe(
                res => {
                    this.isSentSuccess = 1;
                }, err => {
                    this.isSentSuccess = 2;
                }
            );
        }
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