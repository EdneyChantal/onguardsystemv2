import { Component, OnInit,Input } from '@angular/core';
import {LineTableDaoService} from '../dao/linetable.dao.service';
import {TableLine} from '../model/tableline';

@Component({
  selector: 'cp-line-table',
  templateUrl: './linetable.component.html',
  styleUrls: []
})
export class LineTableComponent implements OnInit {
  @Input('contract') keycontract:string;
  @Input('table') keytable:string;
  atable:TableLine[];
  constructor(private tdao:LineTableDaoService) { }

  ngOnInit() {
     
     this.tdao.load(this.keycontract,this.keytable,(obj)=>this.atable=(obj as TableLine[]) );

  }
  save(event) {
     this.tdao.insert(this.keycontract,this.keytable,event as TableLine);
  }

}
