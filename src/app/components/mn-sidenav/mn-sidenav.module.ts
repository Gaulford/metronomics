import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {provideHttpClient} from '@angular/common/http';

import { MnSidenavComponent } from './mn-sidenav.component';

import {MnSidenavColumnModule} from './mn-sidenav-column/mn-sidenav-column.module';
import {MnSidenavItemModule} from './mn-sidenav-item/mn-sidenav-item.module';
import {MnSidenavIconModule} from './mn-sidenav-icon/mn-sidenav-icon.module';
import {MnSidenavMainModule} from './mn-sidenav-main/mn-sidenav-main.module';
import {MnSidenavItemsModule} from './mn-sidenav-items/mn-sidenav-items.module';


@NgModule({
    declarations: [
        MnSidenavComponent
    ],
    imports: [
        CommonModule,
        MnSidenavColumnModule,
        MnSidenavItemModule,
        MnSidenavIconModule,
        MnSidenavMainModule,
        MnSidenavItemsModule
    ],
    exports: [
        MnSidenavComponent,
        MnSidenavColumnModule,
        MnSidenavItemModule,
        MnSidenavIconModule,
        MnSidenavMainModule,
        MnSidenavItemsModule
    ],
    providers: [
        provideHttpClient()
    ]
})
export class MnSidenavModule {
}
