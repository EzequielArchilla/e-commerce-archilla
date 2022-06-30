import { TestBed } from '@angular/core/testing';

import { ToastFunctionsService } from './toast-functions.service';

describe('ToastFunctionsService', () => {
  let service: ToastFunctionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToastFunctionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
