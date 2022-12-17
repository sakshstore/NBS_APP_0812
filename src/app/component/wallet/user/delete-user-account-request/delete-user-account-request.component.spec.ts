import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteUserAccountRequestComponent } from './delete-user-account-request.component';

describe('DeleteUserAccountRequestComponent', () => {
  let component: DeleteUserAccountRequestComponent;
  let fixture: ComponentFixture<DeleteUserAccountRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteUserAccountRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteUserAccountRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
