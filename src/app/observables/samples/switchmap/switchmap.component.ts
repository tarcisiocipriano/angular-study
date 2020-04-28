import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Subscription, interval, fromEvent } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-switchmap',
  templateUrl: './switchmap.component.html',
  styleUrls: ['./switchmap.component.scss']
})
export class SwitchmapComponent implements OnInit, OnDestroy {

  output: number;

  @ViewChild('button', { static: true }) button: ElementRef;

  subscription = new Subscription();

  ngOnInit() {
    const obs1 = fromEvent(this.button.nativeElement, 'click');
    const obs2 = interval(1000);

    this.subscription = obs1.pipe(switchMap(() => obs2))
      .subscribe({
        next: value => this.output = value
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
