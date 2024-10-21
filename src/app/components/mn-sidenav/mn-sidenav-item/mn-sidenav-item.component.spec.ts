import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MnSidenavItemComponent } from './mn-sidenav-item.component';

describe('MnSidenavItemComponent', () => {
  let component: MnSidenavItemComponent;
  let fixture: ComponentFixture<MnSidenavItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MnSidenavItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MnSidenavItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
