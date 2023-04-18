import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from 'src/app/explore-container/explore-container.component';
import { Quiz } from 'src/app/quiz-api/quiz';
import { QuizApiModule } from 'src/app/quiz-api/quiz-api.module';
import { QuizStorageService } from 'src/app/quiz-api/quiz-storage.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, QuizApiModule, CommonModule],
})
export class QuizComponent  implements OnInit {
  questNumber = 0;

  constructor(
    private quizStorage: QuizStorageService,
  ) { }

  ngOnInit() {}

  getQuiz() {
    return this.quizStorage.getQuiz(this.questNumber);
  }
  filterAnswers(quiz: Quiz | undefined) {
    if(!quiz) return [];
    const answers = Object.keys(quiz.answers);
    return answers.map(answer => {
      //@ts-ignore
      const answerValue = quiz.answers[answer];
      if (answerValue === null) return;
      return { answer: answerValue };
    }).filter(answer => !!answer);
  }

}
