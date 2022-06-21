import { TestBed } from '@angular/core/testing';

import { MywebapiserviceService } from './mywebapiservice.service';

describe('MywebapiserviceService', () => {
  let service: MywebapiserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MywebapiserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
