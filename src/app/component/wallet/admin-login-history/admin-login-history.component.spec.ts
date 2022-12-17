import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLoginHistoryComponent } from './admin-login-history.component';

describe('AdminLoginHistoryComponent', () => {
  let component: AdminLoginHistoryComponent;
  let fixture: ComponentFixture<AdminLoginHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminLoginHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLoginHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
