import { TestBed } from '@angular/core/testing';

import { MovieapiSeviceService } from './movieapi-sevice.service';

describe('MovieapiSeviceService', () => {
  let service: MovieapiSeviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieapiSeviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
