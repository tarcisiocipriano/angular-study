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
    { name: 'behaviorSubject()', route: 'behaviorsubject' },
    { name: 'map() and throttleTime()', route: 'map-throttletime' },
    { name: 'filter()', route: 'filter' },
    { name: 'debounceTime()', route: 'debouncetime' },
    { name: 'pluck()', route: 'pluck' },
    { name: 'scan() and reduce()', route: 'scan-reduce' },
    { name: 'mergeMap()', route: 'mergemap' },
    { name: 'switchMap()', route: 'switchmap' }
  ];

}
