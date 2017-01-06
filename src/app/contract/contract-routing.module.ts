import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard}          from '../auth-guard.service';
import {ContractComponent} from './contract.component'

const contractRoutes: Routes = [
  {
    path: 'contract',
    component: ContractComponent    ,
    canActivate : [AuthGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(contractRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [AuthGuard]
})
export class ContractRoutingModule {}
