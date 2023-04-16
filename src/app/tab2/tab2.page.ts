import { Component, importProvidersFrom } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { ApiService } from '../quiz-api/api.service';
import { QuizApiModule } from '../quiz-api/quiz-api.module';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, QuizApiModule],
})
export class Tab2Page {

  constructor(
    private apiService: ApiService,
  ) {
    this.apiService.getRandomQuiz();
  }

}
