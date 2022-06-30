import { TestBed } from '@angular/core/testing';

import { RepartidorFirestoreService } from './repartidor-firestore.service';

describe('RepartidorFirestoreService', () => {
  let service: RepartidorFirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepartidorFirestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
