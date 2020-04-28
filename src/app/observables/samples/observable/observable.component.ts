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

  ngOnInit() {
    this.subscription = fromEvent(this.button.nativeElement, 'click')
    .subscribe({
      next: (value: MouseEvent) => this.output = value.clientX.toString(),
      error: error => this.output = error,
      complete: () => this.output = 'completed'
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
