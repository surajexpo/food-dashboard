import { TestBed } from '@angular/core/testing';

import { CurrentaffairsService } from './dcurrentaffairs.service';

describe('CurrentaffairsService', () => {
  let service: CurrentaffairsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentaffairsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
