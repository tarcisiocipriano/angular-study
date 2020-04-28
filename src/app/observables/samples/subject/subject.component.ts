import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit, OnDestroy {

  item: string;

  subj = new Subject<string>();

  subscription = new Subscription();

  ngOnInit() {
    this.subscription = this.subj.subscribe({
      next: data => this.item = data
    });
  }

  onClick() {
    this.subj.next('Heisenberg');
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
