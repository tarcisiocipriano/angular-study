import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RoutingComponent } from './routing.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServersService } from './servers/servers.service';
import { RoutingRoutingModule } from './routing.routing';
import { ServerResolver } from './servers/server/server-resolver.service';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { canDeactivateGuard } from './servers/edit-server/can-deactivate-guard.service';

@NgModule({
  declarations: [
    RoutingComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RoutingRoutingModule
  ],
  providers: [ServersService, ServerResolver, AuthService, AuthGuard, canDeactivateGuard]
})
export class RoutingModule { }
