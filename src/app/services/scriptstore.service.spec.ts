import { TestBed } from '@angular/core/testing';

import { ScriptStoreService } from './scriptstore.service';

describe('ScriptStoreService', () => {
  let service: ScriptStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScriptStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
