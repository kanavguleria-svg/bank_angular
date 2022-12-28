import { TestBed } from '@angular/core/testing';

import { TrxnService } from './trxn.service';

describe('TrxnService', () => {
  let service: TrxnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrxnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
