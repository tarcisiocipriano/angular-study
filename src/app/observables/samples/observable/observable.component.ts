import { Component, ViewChild, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { Subscription, fromEvent } from 'rxjs';
import { throttleTime, map } from 'rxjs/operators';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit, OnDestroy {

  output: string;

  @ViewChild('button', {static: true}) button: ElementRef;

  subscription: Subscription;

  observer = {
    next: (value: string) => this.output = value,
    error: (error: string) => this.output = error,
    complete: () => this.output = 'completed'
  };

  ngOnInit() {
    this.subscription = fromEvent(this.button.nativeElement, 'click')
    .pipe(
      throttleTime(1000),
      map((event: MouseEvent) => event.clientX.toString())
    )
    .subscribe(this.observer);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
