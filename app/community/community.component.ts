import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { CommunityService } from './community.service';

@Component({
    templateUrl: '/app/community/community.component.html',
    styleUrls: ['app/community/community.component.css'],
    directives: [ROUTER_DIRECTIVES]
})

export class CommunityComponent {

    constructor(private _communityService: CommunityService){
        //Hello
    }

    subscriber = {
        id:"",
        name:"",
        email:"",
        company:"",
        exported:false
    }

    sendForm = function():void{
        this.subscriber.id = this.guid();
        this._communityService.SubscriberAdd(this.subscriber);
    };

    guid = function guid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    };
}
