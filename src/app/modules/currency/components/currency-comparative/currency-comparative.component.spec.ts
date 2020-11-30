import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyComparativeComponent } from './currency-comparative.component';

describe('CurrencyComparativeComponent', () => {
  let component: CurrencyComparativeComponent;
  let fixture: ComponentFixture<CurrencyComparativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyComparativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyComparativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
