import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtimeQuoteComponent } from './realtime-quote.component';

describe('RealtimeQuoteComponent', () => {
  let component: RealtimeQuoteComponent;
  let fixture: ComponentFixture<RealtimeQuoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealtimeQuoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealtimeQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
