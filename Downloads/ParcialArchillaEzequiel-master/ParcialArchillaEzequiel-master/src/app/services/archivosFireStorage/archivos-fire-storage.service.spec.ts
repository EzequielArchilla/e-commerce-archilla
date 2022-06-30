import { TestBed } from '@angular/core/testing';

import { ArchivosFireStorageService } from './archivos-fire-storage.service';

describe('ArchivosFireStorageService', () => {
  let service: ArchivosFireStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArchivosFireStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
