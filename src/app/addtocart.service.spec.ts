import { TestBed } from '@angular/core/testing';

import { AddtocartService } from './user-cart/addtocart.service';

describe('AddtocartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddtocartService = TestBed.get(AddtocartService);
    expect(service).toBeTruthy();
  });
});
