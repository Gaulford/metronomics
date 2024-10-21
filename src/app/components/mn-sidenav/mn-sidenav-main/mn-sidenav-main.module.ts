import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MnSidenavMainComponent} from './mn-sidenav-main.component';


@NgModule({
    declarations: [
        MnSidenavMainComponent
    ],
    exports: [
        MnSidenavMainComponent
    ],
    imports: [
        CommonModule
    ]
})
export class MnSidenavMainModule {
}
