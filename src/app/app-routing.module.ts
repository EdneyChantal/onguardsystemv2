import {NgModule }             from '@angular/core';
import {RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
    { path: 'login',
      loadChildren:'app/login/login.module#LoginModule',
    },
    { path: 'menu',
      loadChildren:'app/menu/menu.module#MenuModule',
     },
     {path:'',
      redirectTo:'/menu',
      pathMatch: 'full' }
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