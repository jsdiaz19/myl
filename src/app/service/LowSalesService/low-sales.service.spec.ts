import { TestBed } from '@angular/core/testing';

import { LowSalesService } from './low-sales.service';

describe('LowSalesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LowSalesService = TestBed.get(LowSalesService);
    expect(service).toBeTruthy();
  });
});
