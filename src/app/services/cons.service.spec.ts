import { TestBed } from '@angular/core/testing';

import { ConsService } from './cons.service';

describe('ConsService', () => {
  let service: ConsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
