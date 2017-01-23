import { Component, Input,OnChanges } from '@angular/core';
import {LineTableDaoService} from '../dao/linetable.dao.service';
import {TableLine} from '../model/tableline';
import {Table} from '../model/table';
import {PraticaCore} from '../share/pratica-core.service';

@Component({
  selector: 'cp-line-table',
  templateUrl: './linetable.component.html',
  styleUrls: ['./linetable.component.css']
})
export class LineTableComponent implements OnChanges {
  @Input('contract') keycontract:string;
  @Input('table') ptable:Table;
  liTable:TableLine[]=new Array<TableLine>();
  liTableView:TableLine[]=new Array<TableLine>();
  lineTable:TableLine=new TableLine();
  page:number=1;
  constructor(private tdao:LineTableDaoService,private pcore:PraticaCore) { }


  pageTable(){
     this.liTableView = (this.pcore.controlArrayPage(this.liTable,this.page) as TableLine[]);
  }

  ngOnChanges(changes) {
      this.tdao.load(this.keycontract,this.ptable.id,(obj)=>{
        this.liTable=(obj as TableLine[]);
        this.pageTable();
       } );
  }

  del(lin:TableLine) {
    this.tdao.remove(lin.id);
  }
  onSubmit() {
     this.tdao.insert(this.keycontract,this.ptable.id,this.lineTable);
     this.lineTable=new TableLine();
  }
  do() {
   for (let i=1;i<15;i++) {
     let it:TableLine =new TableLine();
     it.description= "teste " + i;
     it.codext   = "i";
     this.tdao.insert(this.keycontract,this.ptable.id,it);
   }


  }


}
