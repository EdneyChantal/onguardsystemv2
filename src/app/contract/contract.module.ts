import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContractComponent}  from './contract.component';
import {ContractRoutingModule}  from './contract-routing.module';
import {DaoService}   from '../share/dao.service';
@NgModule({
  imports: [
    CommonModule,
    ContractRoutingModule
  ],
  declarations: [ContractComponent],
  providers:[DaoService]
})
export class ContractModule { }
