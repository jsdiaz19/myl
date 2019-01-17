import { TestBed } from '@angular/core/testing';

import { HttBDService } from './htt-bd.service';

describe('HttBdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttBDService = TestBed.get(HttBDService);
    expect(service).toBeTruthy();
  });
});
