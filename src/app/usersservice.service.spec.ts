import { TestBed } from '@angular/core/testing';

import { UsersserviceService } from './my-profile/usersservice.service';

describe('UsersserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsersserviceService = TestBed.get(UsersserviceService);
    expect(service).toBeTruthy();
  });
});
