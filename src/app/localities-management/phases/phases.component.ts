import {Component, OnInit} from '@angular/core';
import {PhasesService} from "./phases.service";

@Component({
    selector: 'app-phases',
    templateUrl: './phases.component.html'
})
export class PhasesComponent implements OnInit {

    phases: any = [];

    constructor(private phasesService: PhasesService) {
    }

    ngOnInit() {
        this.phasesService.getPhases().subscribe(phases => {
            this.phases = phases;
        });
    }

}
