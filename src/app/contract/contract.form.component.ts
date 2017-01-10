import {Component,Input,Output,EventEmitter} from '@angular/core';
import {Contract} from '../model/contract'
import {PraticaCore}  from '../share/pratica-core.service'


@Component({
  selector: 'cp-contract-form',
  templateUrl: './contract.form.component.html'

})

export class ContractFormComponent {
   @Output() contractchange:EventEmitter<Contract>=new EventEmitter<Contract>();
   @Output() contractcancel:EventEmitter<any>=new EventEmitter<any>();
   contract:Contract=new Contract();

  

   constructor(private pccore:PraticaCore) {}
   onKey(value){
      this.contract.description = 'maria';
   }
   onSubmit() {
      this.contractchange.emit(this.contract);
   }
   cancel() {
      this.contractcancel.emit();
   }
   
   upperCase(event) {
     this.contract.description = (event as String).toUpperCase();
   }
}