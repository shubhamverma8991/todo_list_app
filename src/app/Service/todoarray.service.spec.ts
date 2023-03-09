import { TestBed } from '@angular/core/testing';

import { TodoarrayService } from './todoarray.service';

describe('TodoarrayService', () => {
  let service: TodoarrayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoarrayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
