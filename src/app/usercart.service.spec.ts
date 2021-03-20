
import { TestBed } from '@angular/core/testing';

import { UsercartService } from './user-cart/usercart.service';

describe('UsercartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsercartService = TestBed.get(UsercartService);
    expect(service).toBeTruthy();
  });
});
