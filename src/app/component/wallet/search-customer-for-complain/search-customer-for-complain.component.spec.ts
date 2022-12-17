import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCustomerForComplainComponent } from './search-customer-for-complain.component';

describe('SearchCustomerForComplainComponent', () => {
  let component: SearchCustomerForComplainComponent;
  let fixture: ComponentFixture<SearchCustomerForComplainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchCustomerForComplainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCustomerForComplainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
