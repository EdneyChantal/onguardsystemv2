import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PortariaComponent} from './portaria.component';
import {ContractDaoService} from '../dao/contract.dao.service';
import {ParamDaoService} from '../dao/param.dao.service';
import {LineTableDaoService} from '../dao/linetable.dao.service';
import {RegisterInputDaoService} from '../dao/registerinput.dao.service';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PortariaComponent],
  providers:[ContractDaoService,ParamDaoService,LineTableDaoService,RegisterInputDaoService]
})
export class PortariaModule { }
