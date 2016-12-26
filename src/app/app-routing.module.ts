import {NgModule }             from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import {LoginComponent       } from './login/login.component';

const appRoutes: Routes = [
    { path: 'login',
      component: LoginComponent
    },
    { path: 'menu',
      loadChildren:'app/menu/menu.module#MenuModule',
     }
    ];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ],
  providers: []
})


export class AppRoutingModule {}