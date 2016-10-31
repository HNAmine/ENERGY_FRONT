import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {ClickOutsideDirective} from "./directives/clickoutside.directive";
import {SidebarComponent} from './sidebar/sidebar.component';
import {PhasesComponent} from './localities-management/phases/phases.component';
import {AppRoutingModule} from "./app-routing.module";
import { ErrorComponent } from './error/error.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        ClickOutsideDirective,
        SidebarComponent,
        ErrorComponent],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
