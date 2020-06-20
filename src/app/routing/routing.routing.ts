import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoutingComponent } from './routing.component';
import { HomeComponent } from './home/home.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';

import { ServerResolver } from './servers/server/server-resolver.service';
import { AuthGuard } from './auth-guard.service';
import { canDeactivateGuard } from './servers/edit-server/can-deactivate-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '', component: RoutingComponent, children: [
      { path: 'home', component: HomeComponent },
      {
        path: 'users',
        canActivate: [AuthGuard],
        component: UsersComponent,
        children: [
          { path: ':id/:name', component: UserComponent },
        ]
      },
      {
        path: 'servers',
        canActivateChild: [AuthGuard],
        component: ServersComponent,
        children: [
          { path: ':id', component: ServerComponent, resolve: { server: ServerResolver } },
          { path: ':id/edit', component: EditServerComponent, canDeactivate: [canDeactivateGuard] }
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingRoutingModule { }
