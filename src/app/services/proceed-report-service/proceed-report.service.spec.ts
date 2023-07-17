import { TestBed } from '@angular/core/testing';

import { ProceedReportService } from './proceed-report.service';

describe('ProceedReportService', () => {
  let service: ProceedReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProceedReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
