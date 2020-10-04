import { TestBed } from '@angular/core/testing';

import { BoatResolverService } from './boat-resolver.service';

describe('BoatResolverService', () => {
  let service: BoatResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoatResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
