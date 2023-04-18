import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from 'src/app/explore-container/explore-container.component';
import { QuizApiModule } from 'src/app/quiz-api/quiz-api.module';
import { QuizStorageService } from 'src/app/quiz-api/quiz-storage.service';

@Component({
  selector: 'app-start-quiz',
  templateUrl: './start-quiz.component.html',
  styleUrls: ['./start-quiz.component.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, QuizApiModule],
})
export class StartQuizComponent  implements OnInit {

  constructor(
    private quizStorage: QuizStorageService,
  ) { }

  ngOnInit() {}

  loadQuiz() {
    this.quizStorage.loadQuiz$.next();
  }
}
