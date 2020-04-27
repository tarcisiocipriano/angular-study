import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Subscription, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-behaviorsubject',
  templateUrl: './behaviorsubject.component.html',
  styleUrls: ['./behaviorsubject.component.scss']
})
export class BehaviorsubjectComponent implements OnInit, OnDestroy {

  output: string;

  @ViewChild('button', { static: true }) button: ElementRef;

  behaviorSubject = new BehaviorSubject('Not clicked yet');

  subscription = new Subscription();

  ngOnInit() {
    this.behaviorSubject.subscribe(value => this.output = value);
  }

  onClick() {
    this.behaviorSubject.next('Clicked');
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
