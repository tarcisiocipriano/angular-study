import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ObservablesRoutingModule } from './observables.routing';
import { ObservablesComponent } from './observables.component';
import { SidebarComponent } from './sidebar/sidebar.component';
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

@NgModule({
  declarations: [
    ObservablesComponent,
    SidebarComponent,
    ObservableComponent,
    SubjectComponent,
    MapThrottletimeComponent,
    FilterComponent,
    DebouncetimeComponent,
    ScanReduceComponent,
    PluckComponent,
    MergemapComponent,
    SwitchmapComponent,
    BehaviorsubjectComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ObservablesRoutingModule
  ],
  providers: []
})
export class ObservablesModule { }
