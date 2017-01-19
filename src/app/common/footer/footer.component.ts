import { Component } from '@angular/core';

@Component({
    selector: 'pm-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})

export class FooterComponent {
    year = new Date().getFullYear();

    socialLinks = [
        {'name': 'Facebook', 'link': 'https://www.facebook.com/slambynews', 'class': 'fa-facebook-f'},
        {'name': 'Twitter', 'link': 'https://twitter.com/slambynews', 'class': 'fa-twitter'},
        {'name': 'LinkedIn', 'link': 'https://www.linkedin.com/company/slamby', 'class': 'fa-linkedin'},
        {'name': 'Instagram', 'link': 'https://www.instagram.com/slambynews/', 'class': 'fa-instagram'},
        {'name': 'YouTube', 'link': 'https://www.youtube.com/channel/UCQ6UfPZshXDIXT0zi3xRyHQ', 'class': 'fa-youtube-play'}
    ]
}