import { TestBed } from '@angular/core/testing';

import { UnsplashbgService } from './unsplashbg.service';

describe('UnsplashbgService', () => {
  let service: UnsplashbgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnsplashbgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
