import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWithdrawsComponent } from './user-withdraws.component';

describe('UserWithdrawsComponent', () => {
  let component: UserWithdrawsComponent;
  let fixture: ComponentFixture<UserWithdrawsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserWithdrawsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserWithdrawsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
