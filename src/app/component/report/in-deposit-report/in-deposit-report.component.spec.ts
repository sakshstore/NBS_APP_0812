import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InDepositReportComponent } from './in-deposit-report.component';

describe('InDepositReportComponent', () => {
  let component: InDepositReportComponent;
  let fixture: ComponentFixture<InDepositReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InDepositReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InDepositReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
