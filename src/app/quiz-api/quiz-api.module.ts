import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizApiService } from './quiz-api.service';
import { HttpClientModule } from '@angular/common/http';
import { QuizStorageService } from './quiz-storage.service';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    QuizApiService,
    QuizStorageService,
  ]
})
export class QuizApiModule {
}
