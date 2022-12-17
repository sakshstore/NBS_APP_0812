import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KycUsersComponent } from './kyc-users.component';

describe('KycUsersComponent', () => {
  let component: KycUsersComponent;
  let fixture: ComponentFixture<KycUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KycUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KycUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
