import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormComponent } from './form.component';
import { FormRoutingModule } from './form.routing';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ReactiveComponent } from './reactive/reactive.component';

@NgModule({
  declarations: [
    FormComponent,
    TemplateDrivenComponent,
    ReactiveComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormRoutingModule
  ],
  providers: []
})
export class FormModule { }
