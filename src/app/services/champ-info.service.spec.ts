import { TestBed } from '@angular/core/testing';

import { ChampInfoService } from './champ-info.service';

describe('ChampInfoService', () => {
  let service: ChampInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChampInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
