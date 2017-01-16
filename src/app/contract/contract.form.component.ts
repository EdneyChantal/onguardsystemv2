import {Component,Input,Output,EventEmitter, OnInit } from '@angular/core';
import {PraticaCore}  from '../share/pratica-core.service'
import {ContractView}  from '../model/contractView'

@Component({
  selector: 'cp-contract-form',
  templateUrl: './contract.form.component.html'

})

export class ContractFormComponent implements OnInit {
   @Output() contractchange:EventEmitter<ContractView>=new EventEmitter<ContractView>();
   @Output() contractcancel:EventEmitter<any>=new EventEmitter<any>();
   @Input('changeContract')  chCt:ContractView;
   contract:ContractView=new ContractView();

   ngOnInit() {
      if (this.chCt) {
        this.contract=this.chCt;
      }
      

   }

   constructor(private pccore:PraticaCore) {}
   onKey(value){
      //this.contract.description = 'maria';
   }
   onSubmit() {
      this.contractchange.emit(this.contract);
      this.contract= new ContractView();
      
   }
   cancel() {
      this.contract = new ContractView();
   }
   
   upperCase(event) {
    // this.contract.description = (event as String).toUpperCase();
   }
}