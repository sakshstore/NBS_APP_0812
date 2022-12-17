import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelledBookingComponent } from './cancelled-booking.component';

describe('CancelledBookingComponent', () => {
  let component: CancelledBookingComponent;
  let fixture: ComponentFixture<CancelledBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelledBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelledBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
