import { Component, importProvidersFrom } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { QuizApiModule } from '../quiz-api/quiz-api.module';
import { QuizStorageService } from '../quiz-api/quiz-storage.service';
import { StartQuizComponent } from './start-quiz/start-quiz.component';
import { QuizComponent } from './quiz/quiz.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, StartQuizComponent, QuizComponent, CommonModule],
})
export class Tab2Page {

  constructor(
    private quizStorage: QuizStorageService,
  ) {}

  getShowingQuiz() {
    return this.quizStorage.getShowingQuiz();
  }
}
