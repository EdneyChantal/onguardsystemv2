import { Component, OnInit,Input } from '@angular/core';
import {TableDaoService} from '../dao/table.dao.service';
import {Table} from '../model/table';

@Component({
  selector: 'cp-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input('contract') keycontract:string;
  atable:Table[];
  selectTable:Table;
  formTable:boolean=false;
  constructor(private tdao:TableDaoService) { }

 toogleForm() {
   this.formTable = !this.formTable; 

 }
  
  selTable(pTable:Table) {
    this.selectTable = pTable;
  }

  ngOnInit() {
     
     this.tdao.load(this.keycontract,(obj)=>this.atable=(obj as Table[]) );

  }
  save(event) {
     this.tdao.insert(this.keycontract,event as Table);
  }

}
