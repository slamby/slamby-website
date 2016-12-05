import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    templateUrl: './partners.component.html',
    styleUrls: ['./partners.component.scss']
})

export class PartnersComponent {
    partners = [
        {"name":"Microsoft","logo":"microsoft.png"},
        {"name":"ICMA","logo":"icma.jpg"},
        {"name":"Hungarian Tradehouse","logo":"tradehouse.png"},
        {"name":"Digital Factory","logo":"digital-factory.png"},
        {"name":"Fiware","logo":"fiware.png"},
        {"name":"CEU Business School","logo":"ceubs.jpg"},
        {"name":"CEED Tech","logo":"ceed-tech.png"},
        {"name":"CE EN","logo":"ce-en.jpg"}
    ];
}