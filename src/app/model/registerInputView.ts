import {RegisterInputTable} from './registerInputTable';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap'

export class RegisterInputView {
   day:NgbDateStruct;
   id:string;
   placa:string;
   horaIni:string;
   horaFim:string;
   idcontact:string;
   infoTables:RegisterInputTable[];
   valor:string;
   constructor() {
      this.infoTables = new Array<RegisterInputTable>();
   }
   insInfoTable(inf:RegisterInputTable){
      this.infoTables.push(inf);
   }
}