import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MnSidenavIconComponent } from './mn-sidenav-icon.component';

describe('MnSidenavIconComponent', () => {
  let component: MnSidenavIconComponent;
  let fixture: ComponentFixture<MnSidenavIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MnSidenavIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MnSidenavIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
