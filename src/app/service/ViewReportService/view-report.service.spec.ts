import { TestBed } from '@angular/core/testing';

import { ViewReportService } from './view-report.service';

describe('ViewReportService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViewReportService = TestBed.get(ViewReportService);
    expect(service).toBeTruthy();
  });
});
