import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoupanListComponent } from './coupan-list.component';

describe('CoupanListComponent', () => {
  let component: CoupanListComponent;
  let fixture: ComponentFixture<CoupanListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoupanListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoupanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
