import { TestBed } from '@angular/core/testing';

import { LoLItemsService } from './LoLitems.service';

describe('LoLItemsService', () => {
  let service: LoLItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoLItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
