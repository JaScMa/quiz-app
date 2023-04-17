import { Injectable, isStandalone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { keys } from 'src/environments/key';
import { Quiz } from './quiz';

@Injectable()
export class QuizApiService {
getRandomQuiz() {
    return this.http.get<Quiz[]>(environment.quizApi, {params: {apiKey: keys.apiKey}})
  }
  constructor(
    private http: HttpClient,
  ) { }
}
