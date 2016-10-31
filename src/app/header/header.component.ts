import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

    title: string = 'RIM ENERGY';
    isOpen: boolean = false;

    constructor() {
    }

    ngOnInit() {
    }

    clickOut() {
        this.isOpen = false;
    }

    clickIn() {
        this.isOpen = true;
    }

}
