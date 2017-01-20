import { Component, OnInit,Input } from '@angular/core';
import {LineTableDaoService} from '../dao/linetable.dao.service';
import {TableLine} from '../model/tableline';
import {Table} from '../model/table';

@Component({
  selector: 'cp-line-table',
  templateUrl: './linetable.component.html',
  styleUrls: ['./linetable.component.css']
})
export class LineTableComponent implements OnInit {
  @Input('contract') keycontract:string;
  @Input('table') ptable:Table;
  atable:TableLine[];
  constructor(private tdao:LineTableDaoService) { }

  ngOnInit() {
     
     this.tdao.load(this.keycontract,this.ptable.id,(obj)=>this.atable=(obj as TableLine[]) );

  }
  save(event) {
     this.tdao.insert(this.keycontract,this.ptable.id,event as TableLine);
  }

}
