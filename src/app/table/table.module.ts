import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TableComponent} from './table.component';
import {TableDaoService}  from '../dao/table.dao.service';
import {FormsModule}    from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    FormsModule ,
    NgbModule
  ],
  declarations: [TableComponent],
  providers:[TableDaoService]
})
export class TableModule { }
