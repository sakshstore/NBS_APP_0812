import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddServiceProblemComponent } from './add-service-problem.component';

describe('AddServiceProblemComponent', () => {
  let component: AddServiceProblemComponent;
  let fixture: ComponentFixture<AddServiceProblemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddServiceProblemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddServiceProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
