import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TableComponent} from './table.component';
import {TableDaoService}  from '../dao/table.dao.service';
import {FormsModule}    from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TableFormComponent} from './table.form.component';
import {LineTableDaoService} from '../dao/linetable.dao.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule ,
    NgbModule
  ],
  declarations: [TableComponent, TableFormComponent],
  providers:[TableDaoService,LineTableDaoService],
  exports:[TableComponent]
})
export class TableModule { }
