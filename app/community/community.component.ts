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

    response = {
        isSuccess:false,
        message:""
    }

    subscriber = {
        id:"",
        name:"",
        email:"",
        company:"",
        date:"",
        country:"",
        exported:"false"
    }

    sendForm = function():void{
        this.subscriber.id = this.guid();
        this._communityService.SubscriberAdd(this.subscriber)
            .subscribe(
                data => {
                    this.response.message = "Loading";
                },
                err => {
                    this.response.isSuccess = false;
                    this.response.message = "Error";
                },
                () => {
                    this.response.isSuccess = true;
                    this.response.message = "Completed";
                }
            );
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
