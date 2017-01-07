import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';
import {ContractComponent}  from './contract.component';
import {ContractDaoService}   from '../dao/contract.dao.service';
import {ContractFormComponent} from './contract.form.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [
    CommonModule,
      NgbModule,
      FormsModule,
  ],
   declarations: [ContractComponent,ContractFormComponent],
  providers:[ContractDaoService]
})
export class ContractModule { }
