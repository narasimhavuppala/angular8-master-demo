import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {EditServerComponent} from './servers/edit-server/edit-server.component';
import {ServerComponent} from './servers/server/server.component';
import {ServersComponent} from './servers/servers.component';
import {UserComponent} from './users/user/user.component';
import {UsersComponent} from './users/users.component';
import {HomeComponent} from './home/home.component';
import {AuthGuardService} from './auth-guard.service';
import {CanDeactivateGuardService} from './servers/edit-server/can-deactivate-guard.service';
import {ErrorPageComponent} from './error-page/error-page.component';
import {ServerResolverService} from './servers/server/server-resolver.service';


// Routes work from top down
const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'users', component: UsersComponent, 
    children: [
      { path: ':id/:name', component: UserComponent}
  ]},
  { path: 'servers',
    canActivateChild: [AuthGuardService],
    component: ServersComponent,
    children: [
    { path: ':id', component: ServerComponent, resolve: {server: ServerResolverService} },
    { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuardService]}
  ]},

  { path: 'not-found', component: PageNotFoundComponent, data: {message: 'Page not  found!'} },
  { path: 'error', component: ErrorPageComponent, data: {message: 'Not Authenticated'} },
  { path: '**', redirectTo: '/not-found'}

];


@NgModule({
  imports: [

    RouterModule.forRoot(appRoutes, { enableTracing: true, useHash : true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
