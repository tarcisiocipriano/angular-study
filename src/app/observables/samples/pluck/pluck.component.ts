import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Subscription, fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, pluck } from 'rxjs/operators';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.scss']
})
export class PluckComponent implements OnInit, OnDestroy {

  output: string;

  @ViewChild('input', { static: true }) input: ElementRef;

  subscription = new Subscription();

  constructor() { }

  ngOnInit() {
    fromEvent(this.input.nativeElement, 'input')
      .pipe(
        pluck('target', 'value'),
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe({
        next: (data: string) => this.output = data
      });
    // (event: Event) => console.log((event.target as HTMLInputElement).value)
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
