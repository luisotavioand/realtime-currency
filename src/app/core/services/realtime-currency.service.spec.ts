import { TestBed } from '@angular/core/testing';

import { RealtimeCurrencyService } from './realtime-currency.service';

describe('RealtimeCurrencyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RealtimeCurrencyService = TestBed.get(RealtimeCurrencyService);
    expect(service).toBeTruthy();
  });
});
