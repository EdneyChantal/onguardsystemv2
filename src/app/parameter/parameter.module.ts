import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule}    from '@angular/forms';
import {ParameterComponent}  from './parameter.component';
import {ParamDaoService}   from '../dao/param.dao.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [
    CommonModule,
      NgbModule,
      FormsModule,
  ],
  declarations: [ParameterComponent],
  providers:[ParamDaoService]
})
export class ParameterModule { }