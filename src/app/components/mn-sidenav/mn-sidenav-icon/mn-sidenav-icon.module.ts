import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MnSidenavIconComponent} from './mn-sidenav-icon.component';

import {MatTooltipModule} from '@angular/material/tooltip';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
    declarations: [
        MnSidenavIconComponent
    ],
    exports: [
        MnSidenavIconComponent
    ],
    imports: [
        CommonModule,
        MatTooltipModule,
        MatIconModule
    ]
})
export class MnSidenavIconModule {
}
