import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/routes/home',
    pathMatch: 'full'
  },
  {
    path: 'routes',
    loadChildren: () => import('./routing/routing.module').then(m => m.RoutingModule)
  },
  {
    path: 'form',
    loadChildren: () => import('./form/form.module').then(m => m.FormModule)
  },
  {
    path: 'http',
    loadChildren: () => import('./http/http.module').then(m => m.HttpModule)
  },
  {
    path: 'observables',
    loadChildren: () => import('./observables/observables.module').then(m => m.ObservablesModule)
  },
  { path: 'not-found', component: ErrorPageComponent, data: { message: 'Page not found!' } },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  // imports: [RouterModule.forRoot(routes, { useHash: true })],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
