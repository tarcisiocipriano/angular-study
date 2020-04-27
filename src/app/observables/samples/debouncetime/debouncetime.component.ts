import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Subscription, fromEvent } from 'rxjs';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-debouncetime',
  templateUrl: './debouncetime.component.html',
  styleUrls: ['./debouncetime.component.scss']
})
export class DebouncetimeComponent implements OnInit, OnDestroy {

  output: string;

  @ViewChild('input', {static: true}) input: ElementRef;

  subscription = new Subscription();

  ngOnInit() {
    fromEvent(this.input.nativeElement, 'input')
    .pipe(
      // map((event: Event) => (<HTMLInputElement>event.target).value),
      map((event: Event) => (event.target as HTMLInputElement).value),
      debounceTime(2000),
      distinctUntilChanged()
    )
    .subscribe(
      data => this.output = data
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
