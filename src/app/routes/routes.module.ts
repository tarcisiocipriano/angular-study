import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RoutesComponent } from './routes.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServersService } from './servers/servers.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { RoutingModule } from './routes.routing';
import { ServerResolver } from './servers/server/server-resolver.service';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { canDeactivateGuard } from './servers/edit-server/can-deactivate-guard.service';

@NgModule({
  declarations: [
    RoutesComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    ErrorPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RoutingModule
  ],
  providers: [ServersService, ServerResolver, AuthService, AuthGuard, canDeactivateGuard]
})
export class RoutesModule { }
