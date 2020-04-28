import { Component, OnInit, OnDestroy } from '@angular/core';
import { of, Subscription } from 'rxjs';
import { reduce, scan } from 'rxjs/operators';

@Component({
  selector: 'app-scan-reduce',
  templateUrl: './scan-reduce.component.html',
  styleUrls: ['./scan-reduce.component.scss']
})
export class ScanReduceComponent implements OnInit, OnDestroy {

  reduce: number;

  scan: number[] = [];

  observable = of(1, 2, 3, 4, 5);

  subscription1 = new Subscription();

  subscription2 = new Subscription();

  ngOnInit() {
    this.subscription1 = this.observable
      .pipe(
        reduce((total, current) => total + current, 0)
      )
      .subscribe({
        next: value => this.reduce = value
      });

    this.subscription2 = this.observable
      .pipe(
        scan((total, current) => total + current, 0)
      )
      .subscribe({
        next: value => this.scan.push(value)
      });
  }

  ngOnDestroy(): void {
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();
  }

}
