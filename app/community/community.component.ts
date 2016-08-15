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

    isValid:boolean = true;

    subscriber = {
        id:"",
        name:"",
        email:"",
        company:"",
        date:"2016-01-01",
        country:"",
        exported:"false"
    }

    validator = function(){
        this.isValid = true;
        for(var key in this.subscriber){
            if(this.subscriber.hasOwnProperty(key)){
                if(!this.subscriber[key]){
                    this.isValid = false;
                    console.log(key + "is empty");
                }
            }
        }
    }

    sendForm = function():void{
        this.subscriber.id = this.guid();
        this.validator();
        if(this.isValid){
            this._communityService.SubscriberAdd(this.subscriber)
                .subscribe(
                    data => {
                        this.response.message = "Loading";
                    },
                    err => {
                        this.response.isSuccess = false;
                        this.response.message = "Error";
                        console.log(err);
                    },
                    () => {
                        this.response.isSuccess = true;
                        this.response.message = "Completed";
                    }
                );
        } else {
            this.response.isSuccess = false;
            this.response.message = "Please fill the form";
        }
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
