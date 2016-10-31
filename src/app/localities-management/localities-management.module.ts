import {NgModule}       from '@angular/core';
import {CommonModule}   from '@angular/common';
import {LoacalitiesManagementRoutingModule} from "./localities-management-routing";
import {PhasesComponent} from "./phases/phases.component";
import {LocalitiesManagementComponent} from './localities-management.component';
import {PhasesService} from "./phases/phases.service";
import {BlocksComponent} from './blocks/blocks.component';
import {ZonesComponent} from './zones/zones.component';
import {LocalitiesComponent} from './localities/localities.component';

@NgModule({
    imports: [
        CommonModule,
        LoacalitiesManagementRoutingModule
    ],
    declarations: [
        PhasesComponent,
        LocalitiesManagementComponent,
        BlocksComponent,
        ZonesComponent,
        LocalitiesComponent
    ],
    providers: [PhasesService]
})
export class LoacalitiesManagementModule {
}