import { TestBed } from '@angular/core/testing';

import { DeclarationImportService } from './declaration-import.service';

describe('DeclarationImportService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeclarationImportService = TestBed.get(DeclarationImportService);
    expect(service).toBeTruthy();
  });
});
