import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuspendedCustomerComponent } from './suspended-customer.component';

describe('SuspendedCustomerComponent', () => {
  let component: SuspendedCustomerComponent;
  let fixture: ComponentFixture<SuspendedCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuspendedCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuspendedCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
