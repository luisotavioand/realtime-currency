import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyQuoteCardComponent } from './currency-quote-card.component';

describe('CurrencyQuoteCardComponent', () => {
  let component: CurrencyQuoteCardComponent;
  let fixture: ComponentFixture<CurrencyQuoteCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyQuoteCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyQuoteCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
