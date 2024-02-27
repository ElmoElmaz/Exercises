import { TestBed } from '@angular/core/testing';

import { MobilePhonesService } from './mobile-phones.service';

describe('MobilePhonesService', () => {
  let service: MobilePhonesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MobilePhonesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
