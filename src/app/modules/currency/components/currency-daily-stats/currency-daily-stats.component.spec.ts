import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyDailyStatsComponent } from './currency-daily-stats.component';

describe('CurrencyDailyStatsComponent', () => {
  let component: CurrencyDailyStatsComponent;
  let fixture: ComponentFixture<CurrencyDailyStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyDailyStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyDailyStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
