import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobWorkReportComponent } from './job-work-report.component';

describe('JobWorkReportComponent', () => {
  let component: JobWorkReportComponent;
  let fixture: ComponentFixture<JobWorkReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobWorkReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobWorkReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
