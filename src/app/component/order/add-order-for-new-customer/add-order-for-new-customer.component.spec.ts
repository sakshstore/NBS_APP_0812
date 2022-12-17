import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrderForNewCustomerComponent } from './add-order-for-new-customer.component';

describe('AddOrderForNewCustomerComponent', () => {
  let component: AddOrderForNewCustomerComponent;
  let fixture: ComponentFixture<AddOrderForNewCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOrderForNewCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrderForNewCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
