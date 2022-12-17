import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartReportComponent } from './part-report.component';

describe('PartReportComponent', () => {
  let component: PartReportComponent;
  let fixture: ComponentFixture<PartReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
