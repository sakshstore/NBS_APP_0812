import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewProblemComponent } from './review-problem.component';

describe('ReviewProblemComponent', () => {
  let component: ReviewProblemComponent;
  let fixture: ComponentFixture<ReviewProblemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewProblemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
