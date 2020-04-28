import { Component } from '@angular/core';

interface ObservableObj {
  name: string;
  route: string;
}

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss']
})
export class ObservablesComponent {

  observables: ObservableObj[] = [
    { name: 'observable', route: 'observable' },
    { name: 'subject()', route: 'subject' },
    { name: 'map() and throttleTime()', route: 'map-throttletime' },
    { name: 'filter()', route: 'filter' },
    { name: 'debounceTime()', route: 'debouncetime' },
    { name: 'scan() and reduce()', route: 'scan-reduce' },
    { name: 'pluck()', route: 'pluck' },
    { name: 'mergeMap()', route: 'mergemap' },
    { name: 'switchMap()', route: 'switchmap' },
    { name: 'behaviorSubject()', route: 'behaviorsubject' }
  ];

}
