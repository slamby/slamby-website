import { Component } from '@angular/core';
import { CodeExample } from './code.example';

@Component({
    templateUrl: './api.component.html',
    styleUrls: ['./api.component.scss']
})

export class ApiComponent {
    constructor() {
        this.setCodeToDisplay();
    }
    setCodeToDisplay(i:number = 0) {
        this.codeToDisplay = this.sdk.bulk[Object.keys(this.sdk.bulk)[i]];
        this.codeLineNumber = [];
        this.selectedKey = i;
        for (i = 0; i < this.codeToDisplay.split('\n').length; i++) {
            this.codeLineNumber.push(i);
        }
    };
    // tslint:disable-next-line:member-ordering
    sdk = new CodeExample();
    codeToDisplay: string;
    selectedKey: number;
    codeLineNumber = [];
    keys(): Array<string> {
        return Object.keys(this.sdk.bulk);
    }
}
