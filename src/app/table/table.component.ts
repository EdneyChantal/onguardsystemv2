import { Component, OnInit } from '@angular/core';
import {TableDaoService} from '../dao/table.dao.service';
import {Table} from '../model/table';

@Component({
  selector: 'cp-sector',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  atable:Table[];
  constructor(private tdao:TableDaoService) { }

  ngOnInit() {
     this.tdao.load('3273717X3',(obj)=>this.atable=(obj as Table[]) );

  }

}
