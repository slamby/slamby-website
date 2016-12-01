import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    template: require('./partners.component.html'),
    styles: [require('./partners.component.scss')]
})

export class PartnersComponent {
    constructor (title: Title){
        title.setTitle("Slamby - Understanding Data Made Simple");
    }

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