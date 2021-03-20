import { TestBed } from '@angular/core/testing';

import { HomePageServiceService } from './homepage/home-page-service.service';

describe('HomePageServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HomePageServiceService = TestBed.get(HomePageServiceService);
    expect(service).toBeTruthy();
  });
});
