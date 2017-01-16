import {Component, OnInit } from '@angular/core';
import {ContractDaoService}  from '../dao/contract.dao.service'
import {Contract} from '../model/contract';
import {ContractView} from '../model/contractView';
import {ContractFormComponent} from './contract.form.component'

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {
  lct:Contract[];
  openForm:boolean =false; 
  erro:string='';
  selectCt :ContractView;
  keySelect : string ; 
  constructor(private ctDao:ContractDaoService) { }

  ngOnInit() {
      this.ctDao.load(obj=>{
        this.lct=(obj as Contract[]);
      });
  }
  sort(cp:number) {
    this.lct = this.lct.sort((a,b)=>{
      if (a.description < b.description) {
        return -1;
      }
      if (a.description > b.description) {
        return 1;
      }
      return 0;      

    });

  }
  toogleForm() {
    if (this.openForm && this.selectCt) {
       this.selectCt = undefined;
    }
    
    this.openForm=!this.openForm;

  }
  change(pct:Object) {
    
    let ncv = new ContractView();
    this.ctDao.modelToView(pct as Contract,ncv);
    this.selectCt= ncv;
    this.keySelect= pct['$key'];
    this.openForm= true;
  }
  del(key:string ) {
     this.ctDao.removeContract(key);
  }
  save(value:ContractView){
    let nct:Contract=new Contract();
    this.ctDao.viewToModel(nct,value);
    if (this.selectCt) {
       
       this.ctDao.updateContract(this.keySelect, nct,()=>{this.toogleForm()
         },(err)=>this.erro=err);
    } else {
       this.ctDao.viewToModel(nct,value);
       this.ctDao.insertContract( nct,()=>{this.toogleForm()
         },(err)=>this.erro=err);
    }
    this.selectCt = undefined;
    this.keySelect = undefined;
    

  }

}
