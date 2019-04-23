import { TestBed } from '@angular/core/testing';

import { ViewDespachoServiceService } from './view-despacho-service.service';

describe('ViewDespachoServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViewDespachoServiceService = TestBed.get(ViewDespachoServiceService);
    expect(service).toBeTruthy();
  });
});
