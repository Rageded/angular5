import { TestBed, inject } from '@angular/core/testing';

import { UfcService } from './ufc.service';

describe('UfcService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UfcService]
    });
  });

  it('should be created', inject([UfcService], (service: UfcService) => {
    expect(service).toBeTruthy();
  }));
});
