import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit, OnDestroy {

  items: number[] = [];

  subscription = new Subscription();

  ngOnInit() {
    this.subscription = interval(1000)
      .pipe(
        filter(value => value % 2 === 0, this)
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
