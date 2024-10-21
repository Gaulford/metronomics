import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MnSidenavItemsComponent} from './mn-sidenav-items.component';


@NgModule({
    declarations: [
        MnSidenavItemsComponent
    ],
    exports: [
        MnSidenavItemsComponent
    ],
    imports: [
        CommonModule
    ]
})
export class MnSidenavItemsModule {
}
