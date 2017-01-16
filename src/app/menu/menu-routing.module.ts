import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {MenuComponent }    from './menu.component';
import {HomeComponent}      from './home.component';
import {AuthGuard}          from '../auth-guard.service';
import {ContractRoutes} from '../contract/contract.routes'
import {ParameterRoutes} from '../parameter/parameter.routes'

const menuRoutes: Routes = [
  {
    path: 'menu',
    component: MenuComponent,
    canActivate : [AuthGuard],
    children: [
      { path: '',
        component:HomeComponent,
        canActivateChild:[AuthGuard] },
        ...ContractRoutes,
        ...ParameterRoutes
       ],
    
    
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(menuRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [AuthGuard]
})
export class MenuRoutingModule {}
