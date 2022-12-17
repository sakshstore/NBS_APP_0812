import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeWorkSummeryComponent } from './employee-work-summery.component';

describe('EmployeeWorkSummeryComponent', () => {
  let component: EmployeeWorkSummeryComponent;
  let fixture: ComponentFixture<EmployeeWorkSummeryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeWorkSummeryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeWorkSummeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
