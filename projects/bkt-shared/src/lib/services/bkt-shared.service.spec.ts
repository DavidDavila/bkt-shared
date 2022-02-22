import { TestBed } from '@angular/core/testing';

import { BktSharedService } from './bkt-shared.service';

describe('BktSharedService', () => {
  let service: BktSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BktSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
