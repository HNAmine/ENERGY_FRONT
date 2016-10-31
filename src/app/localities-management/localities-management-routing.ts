import {NgModule}     from '@angular/core';
import {RouterModule} from '@angular/router';

import {LocalitiesManagementComponent} from "./localities-management.component";
import {PhasesComponent} from "./phases/phases.component";
import {ZonesComponent} from "./zones/zones.component";
import {BlocksComponent} from "./blocks/blocks.component";
import {LocalitiesComponent} from "./localities/localities.component";

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: LocalitiesManagementComponent,
                children: [
                    {
                        path: '',
                        children: [
                            {path: 'blocks', component: BlocksComponent},
                            {path: 'zones', component: ZonesComponent},
                            {path: 'phases', component: PhasesComponent},
                            {path: 'localities', component: LocalitiesComponent},
                            {path: '', redirectTo: 'phases'}
                        ]
                    }
                ]
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class LoacalitiesManagementRoutingModule {
}