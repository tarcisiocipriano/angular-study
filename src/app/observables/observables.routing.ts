import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ObservablesComponent } from './observables.component';
import { MapThrottletimeComponent } from './samples/map-throttletime/map-throttletime.component';
import { SubjectComponent } from './samples/subject/subject.component';
import { FilterComponent } from './samples/filter/filter.component';
import { DebouncetimeComponent } from './samples/debouncetime/debouncetime.component';
import { ScanReduceComponent } from './samples/scan-reduce/scan-reduce.component';
import { PluckComponent } from './samples/pluck/pluck.component';
import { MergemapComponent } from './samples/mergemap/mergemap.component';
import { SwitchmapComponent } from './samples/switchmap/switchmap.component';
import { BehaviorsubjectComponent } from './samples/behaviorsubject/behaviorsubject.component';
import { ObservableComponent } from './samples/observable/observable.component';

const routes: Routes = [
  {
    path: '',
    component: ObservablesComponent,
    children: [
      {path: 'observable', component: ObservableComponent },
      {path: 'subject', component: SubjectComponent },
      {path: 'map-throttletime', component: MapThrottletimeComponent },
      {path: 'filter', component: FilterComponent },
      {path: 'debouncetime', component: DebouncetimeComponent },
      {path: 'scan-reduce', component: ScanReduceComponent },
      {path: 'pluck', component: PluckComponent },
      {path: 'mergemap', component: MergemapComponent },
      {path: 'switchmap', component: SwitchmapComponent },
      {path: 'behaviorsubject', component: BehaviorsubjectComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObservablesRoutingModule { }
