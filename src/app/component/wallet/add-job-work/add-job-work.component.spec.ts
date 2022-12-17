import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJobWorkComponent } from './add-job-work.component';

describe('AddJobWorkComponent', () => {
  let component: AddJobWorkComponent;
  let fixture: ComponentFixture<AddJobWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddJobWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddJobWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
