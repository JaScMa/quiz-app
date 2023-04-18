import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, combineLatest, first, map, switchMap, tap } from 'rxjs';
import { QuizApiService } from './quiz-api.service';
import { Quiz } from './quiz';

@Injectable()
export class QuizStorageService {
  loadQuiz$ = new Subject<void>();
  quiz$ = new BehaviorSubject<Quiz[]>([]);
  loaded$ = new BehaviorSubject<boolean>(true);
  completed$ = new BehaviorSubject<boolean>(true);

  constructor(
    private quizApiService: QuizApiService,
  ) {
    this.loadQuiz$.pipe(
      tap(() => this.loaded$.next(false)),
      switchMap(() =>
        this.quizApiService.getRandomQuiz().pipe(first())
    )).subscribe(quiz => {
      this.quiz$.next(quiz);
      this.loaded$.next(true);
      this.completed$.next(false);
    })
  }

  getShowingQuiz() {
    return combineLatest([this.loaded$, this.completed$]).pipe(
      map(([loaded, completed]) => {
        return loaded && !completed;
      })
    )
  }
}
