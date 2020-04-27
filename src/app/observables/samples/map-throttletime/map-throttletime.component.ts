import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map, throttleTime } from 'rxjs/operators';

@Component({
  selector: 'app-map-throttletime',
  templateUrl: './map-throttletime.component.html',
  styleUrls: ['./map-throttletime.component.scss']
})
export class MapThrottletimeComponent implements OnInit, OnDestroy {

  output: string[] = [];

  subscription = new Subscription();

  observer = {
    next: (value: string) => this.output.push(value),
    error: (error: string) => console.log(error),
    complete: () => console.log('completed')
  };

  ngOnInit() {
    this.subscription = interval(1000)
      .pipe(
        map(value => `Number: ${value}`),
        throttleTime(1000)
      )
      .subscribe(this.observer);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
