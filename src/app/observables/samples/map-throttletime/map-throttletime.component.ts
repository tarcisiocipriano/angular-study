import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map, throttleTime } from 'rxjs/operators';

@Component({
  selector: 'app-map-throttletime',
  templateUrl: './map-throttletime.component.html',
  styleUrls: ['./map-throttletime.component.scss']
})
export class MapThrottletimeComponent implements OnInit, OnDestroy {

  items: string[] = [];

  subscription = new Subscription();

  ngOnInit() {
    this.subscription = interval(1000)
      .pipe(
        map(value => `Number: ${value}`),
        throttleTime(2000)
      )
      .subscribe({
        next: value => this.items.push(value)
      });

    setTimeout(() => {
      this.subscription.unsubscribe();
    }, 10000);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
