import { Injectable } from '@angular/core';

@Injectable()

export class LeadService {
    someMethod(name:string) {
        return 'Hey! ' + name;
    }
}