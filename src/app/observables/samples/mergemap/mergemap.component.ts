import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Subscription, fromEvent } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

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
    const obs1 = fromEvent(this.input1.nativeElement, 'input');
    const obs2 = fromEvent(this.input2.nativeElement, 'input');

    obs1.pipe(
      mergeMap((event1: Event) => {
        return obs2.pipe(
          map((event2: Event) => {
            return (event1.target as HTMLInputElement).value + ' ' + (event2.target as HTMLInputElement).value;
          })
        );
      })
    ).subscribe(combinedValue => this.output = combinedValue);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
