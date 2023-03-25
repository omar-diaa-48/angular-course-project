import { Component } from '@angular/core';
import { LogginService } from './services/logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'course-project';
  loadedFeature: string = 'recipe';

  constructor(private logginService: LogginService) { }

  onNavigate(featureSelected: string) {
    this.loadedFeature = featureSelected;
    this.logginService.log('Featured changed, currently ' + featureSelected);
  }
}
