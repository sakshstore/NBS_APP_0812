import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimateReportComponent } from './estimate-report.component';

describe('EstimateReportComponent', () => {
  let component: EstimateReportComponent;
  let fixture: ComponentFixture<EstimateReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstimateReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimateReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
