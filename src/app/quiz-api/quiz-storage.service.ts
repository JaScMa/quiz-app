import { Injectable } from '@angular/core';
import { Subject, first, switchMap } from 'rxjs';
import { QuizApiService } from './quiz-api.service';
import { Quiz } from './quiz';

@Injectable()
export class QuizStorageService {
  loadQuiz$ = new Subject<void>();
  quiz?: Quiz[];

  constructor(
    private quizApiService: QuizApiService,
  ) {
    this.loadQuiz$.pipe(
      switchMap(() =>
        this.quizApiService.getRandomQuiz().pipe(first())
    )).subscribe(quiz => {
      this.quiz = quiz;
    })
  }

  getQuiz(index: number) {
    return this.quiz?.[index];
  }
}
