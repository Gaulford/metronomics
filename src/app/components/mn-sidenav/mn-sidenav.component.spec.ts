import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MnSidenavComponent } from './mn-sidenav.component';

describe('MnSidenavComponent', () => {
  let component: MnSidenavComponent;
  let fixture: ComponentFixture<MnSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MnSidenavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MnSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
