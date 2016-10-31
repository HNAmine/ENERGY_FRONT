import {NgModule}     from '@angular/core';
import {RouterModule} from '@angular/router';
import {ErrorComponent} from "./error/error.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: 'localities-management',
                loadChildren: 'app/localities-management/localities-management.module#LoacalitiesManagementModule'
            },
            {
                path: '',
                redirectTo: 'localities-management',
                pathMatch: 'full'
            },
            {path: '**', component: ErrorComponent}
        ])
    ],
    exports: [
        RouterModule
    ],
    providers: []
})
export class AppRoutingModule {
}