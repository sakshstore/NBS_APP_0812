import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerJobWorkListComponent } from './engineer-job-work-list.component';

describe('EngineerJobWorkListComponent', () => {
  let component: EngineerJobWorkListComponent;
  let fixture: ComponentFixture<EngineerJobWorkListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngineerJobWorkListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngineerJobWorkListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
