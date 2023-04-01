import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { LogginService } from './services/logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'course-project';
  loadedFeature: string = 'recipe';
  intervalSubscription: Subscription = new Subscription();

  constructor(private logginService: LogginService) { }

  onNavigate(featureSelected: string) {
    this.loadedFeature = featureSelected;
    this.logginService.log('Featured changed, currently ' + featureSelected);
  }

  ngOnInit(): void {
    const intervalObservable = new Observable((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count > 3) {
          observer.complete()
        }
        count++;
      }, 1000)
    })

    this.intervalSubscription = intervalObservable.subscribe((data) => {
      console.log(data);
    })
  }

  ngOnDestroy(): void {
    this.intervalSubscription.unsubscribe();
  }
}
