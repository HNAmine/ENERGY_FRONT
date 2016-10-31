import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {

    title: string = 'RIM ENERGY';

    constructor() {
    }

    ngOnInit() {
    }

}
