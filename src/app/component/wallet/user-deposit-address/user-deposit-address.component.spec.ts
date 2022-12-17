import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDepositAddressComponent } from './user-deposit-address.component';

describe('UserDepositAddressComponent', () => {
  let component: UserDepositAddressComponent;
  let fixture: ComponentFixture<UserDepositAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDepositAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDepositAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
