import { TestBed } from '@angular/core/testing';

import { PDFdespachoService } from './pdfdespacho.service';

describe('PDFdespachoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PDFdespachoService = TestBed.get(PDFdespachoService);
    expect(service).toBeTruthy();
  });
});
