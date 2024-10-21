import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MnSidenavMainComponent } from './mn-sidenav-main.component';

describe('MnSidenavMainComponent', () => {
  let component: MnSidenavMainComponent;
  let fixture: ComponentFixture<MnSidenavMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MnSidenavMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MnSidenavMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
