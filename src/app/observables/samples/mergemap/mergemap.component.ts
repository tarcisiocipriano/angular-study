import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Subscription, fromEvent } from 'rxjs';
import { map, mergeMap, pluck } from 'rxjs/operators';

@Component({
  selector: 'app-mergemap',
  templateUrl: './mergemap.component.html',
  styleUrls: ['./mergemap.component.scss']
})
export class MergemapComponent implements OnInit, OnDestroy {

  output: string;

  @ViewChild('input1', { static: true }) input1: ElementRef;

  @ViewChild('input2', { static: true }) input2: ElementRef;

  subscription = new Subscription();

  ngOnInit() {
    const obs1 = fromEvent(this.input1.nativeElement, 'input')
      .pipe(pluck('target', 'value'));
    const obs2 = fromEvent(this.input2.nativeElement, 'input')
      .pipe(pluck('target', 'value'));

    this.subscription = obs1.pipe(mergeMap(value1 => {
      return obs2.pipe(map(value2 => {
        return `${value1} ${value2}`;
      }));
    })
    ).subscribe({
      next: combinedValue => this.output = combinedValue
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
