import { TestBed } from '@angular/core/testing';

import { peliculaService } from './pelicula.service';

describe('peliculaService', () => {
  let service: peliculaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(peliculaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
