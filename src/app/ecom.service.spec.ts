import { TestBed } from '@angular/core/testing';

import { EComService } from './ecom.service';

describe('EComService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EComService = TestBed.get(EComService);
    expect(service).toBeTruthy();
  });
});
