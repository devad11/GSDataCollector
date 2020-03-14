import { TestBed } from '@angular/core/testing';

import { SourcehtmlService } from './sourcehtml.service';

describe('SourcehtmlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SourcehtmlService = TestBed.get(SourcehtmlService);
    expect(service).toBeTruthy();
  });
});
