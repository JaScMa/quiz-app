import { Component, importProvidersFrom } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { QuizApiModule } from '../quiz-api/quiz-api.module';
import { QuizStorageService } from '../quiz-api/quiz-storage.service';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, QuizApiModule],
})
export class Tab2Page {

  constructor(
    private quizStorage: QuizStorageService,
  ) {}

  loadQuiz() {
    this.quizStorage.loadQuiz$.next();
  }
  getQuiz() {
    return this.quizStorage.getQuiz(0);
  }
}
