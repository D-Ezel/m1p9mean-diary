import { TestBed } from '@angular/core/testing';

import { TypeRestoService } from './type-resto.service';

describe('TypeRestoService', () => {
  let service: TypeRestoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeRestoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
