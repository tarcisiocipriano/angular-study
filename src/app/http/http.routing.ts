import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HttpComponent } from './http.component';

const routes: Routes = [
  { path: '', component: HttpComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HttpRoutingModule { }
