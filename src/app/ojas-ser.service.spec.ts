import { TestBed } from '@angular/core/testing';

import { OjasSerService } from './ojas-ser.service';

describe('OjasSerService', () => {
  let service: OjasSerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OjasSerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
