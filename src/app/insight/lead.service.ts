import { Injectable } from '@angular/core';

@Injectable()

export class LeadService {
    sayHello(name: string) {
        return 'Hello ' + name;
    }
}
