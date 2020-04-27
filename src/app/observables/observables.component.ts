import { Component } from '@angular/core';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss']
})
export class ObservablesComponent {

  observables: { name: string, route: string }[] = [
    // { name: 'Observable', route: 'observable' },
    { name: 'map() and throttleTime()', route: 'map-throttletime' },
    { name: 'Subject()', route: 'subject' },
    { name: 'filter()', route: 'filter' },
    { name: 'debounceTime()', route: 'debouncetime' },
    { name: 'scan() and reduce()', route: 'scan-reduce' },
    { name: 'pluck()', route: 'pluck' },
    { name: 'mergeMap()', route: 'mergemap' },
    { name: 'switchMap()', route: 'switchmap' },
    { name: 'behaviorSubject()', route: 'behaviorsubject' }
  ];

}
