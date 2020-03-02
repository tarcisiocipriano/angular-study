import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/routes/home', pathMatch: 'full' },
  { path: 'routes', loadChildren: () => import('./routes/routes.module').then(m => m.RoutesModule) },
  { path: 'form', loadChildren: () => import('./form/form.module').then(m => m.FormModule) },
  { path: 'http', loadChildren: () => import('./http/http.module').then(m => m.HttpModule) }
];

@NgModule({
  // imports: [RouterModule.forRoot(routes, { useHash: true })],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
