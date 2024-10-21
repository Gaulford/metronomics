import {Component, Input} from '@angular/core';
import {UrlTree} from '@angular/router';

@Component({
  selector: 'mn-sidenav-icon',
  templateUrl: './mn-sidenav-icon.component.html',
  styleUrl: './mn-sidenav-icon.component.scss'
})
export class MnSidenavIconComponent {
    @Input({ required: true })
    public title: string = '';

    @Input({ required: true })
    public icon: string = '';
}
