import {Component} from '@angular/core';
import {Contract} from '../model/contract'

@Component({
  selector: 'cp-contract-form',
  templateUrl: './contract.form.component.html'

})

export class ContractFormComponent {
   contract:Contract=new Contract();
   constructor() {}
   onKey(value){
      this.contract.description = 'maria';
     
   }
   upperCase(event) {
     this.contract.description = (event as String).toUpperCase();
   }
}