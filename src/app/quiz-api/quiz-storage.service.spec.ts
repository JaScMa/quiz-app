import { TestBed } from '@angular/core/testing';

import { QuizStorageService } from './quiz-storage.service';

describe('QuizStorageService', () => {
  let service: QuizStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
