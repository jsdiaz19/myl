import { TestBed } from '@angular/core/testing';

import { HttBdService } from './htt-bd.service';

describe('HttBdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttBdService = TestBed.get(HttBdService);
    expect(service).toBeTruthy();
  });
});
