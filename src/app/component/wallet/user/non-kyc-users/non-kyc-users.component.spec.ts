import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonKycUsersComponent } from './non-kyc-users.component';

describe('NonKycUsersComponent', () => {
  let component: NonKycUsersComponent;
  let fixture: ComponentFixture<NonKycUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonKycUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonKycUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
