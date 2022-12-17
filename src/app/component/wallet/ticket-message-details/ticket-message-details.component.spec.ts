import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketMessageDetailsComponent } from './ticket-message-details.component';

describe('TicketMessageDetailsComponent', () => {
  let component: TicketMessageDetailsComponent;
  let fixture: ComponentFixture<TicketMessageDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketMessageDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketMessageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
