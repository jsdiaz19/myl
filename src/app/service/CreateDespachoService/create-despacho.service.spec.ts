import { TestBed } from '@angular/core/testing';

import { CreateDespachoService } from './create-despacho.service';

describe('CreateDespachoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateDespachoService = TestBed.get(CreateDespachoService);
    expect(service).toBeTruthy();
  });
});
