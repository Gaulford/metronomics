import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MnSidenavItemsComponent } from './mn-sidenav-items.component';

describe('MnSidenavItemsComponent', () => {
  let component: MnSidenavItemsComponent;
  let fixture: ComponentFixture<MnSidenavItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MnSidenavItemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MnSidenavItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
