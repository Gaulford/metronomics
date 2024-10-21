import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MnSidenavColumnComponent } from './mn-sidenav-column.component';

describe('MnSidenavColumnComponent', () => {
  let component: MnSidenavColumnComponent;
  let fixture: ComponentFixture<MnSidenavColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MnSidenavColumnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MnSidenavColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
