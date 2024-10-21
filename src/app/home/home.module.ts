import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {MnSidenavModule} from '../components/mn-sidenav/mn-sidenav.module';
import {HomeComponent} from './home.component';


@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        MnSidenavModule
    ]
})
export class HomeModule {
}
