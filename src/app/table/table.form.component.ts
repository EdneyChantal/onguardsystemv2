import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {Table} from '../model/table';

@Component({
  selector: 'cp-table-form',
  templateUrl: './table.form.component.html'
})
export class TableFormComponent implements OnInit {
  @Output() tablechange:EventEmitter<Table>=new EventEmitter<Table>();
  table:Table=new Table();
  constructor() { }

  ngOnInit() {
   
  }
  onSubmit() {
      this.tablechange.emit(this.table);
      this.table= new Table();
      
   }

}
