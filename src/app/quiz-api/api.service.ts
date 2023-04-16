import { Injectable, isStandalone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { keys } from 'src/environments/key';

@Injectable()
export class ApiService {
getRandomQuiz() {
    this.http.get(environment.quizApi, {params: {apiKey: keys.apiKey}}).subscribe((data) => {
      console.log(data);
    });
  }
  constructor(
    private http: HttpClient,
  ) { }
}
