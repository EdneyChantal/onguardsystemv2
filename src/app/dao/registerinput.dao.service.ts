import {Injectable} from '@angular/core';
import {DaoService} from './dao.service'
import {AngularFire,FirebaseObjectObservable,FirebaseListObservable} from 'angularfire2';
import {Promise} from 'firebase';
import {Observable} from 'rxjs/observable';
import {AuthService} from '../share/auth.service';
import {PraticaCore}     from '../share/pratica-core.service'
import {RegisterInput} from '../model/registerInput';
import {RegisterInputView} from '../model/registerInputView';
import {NgbDateStruct}              from '@ng-bootstrap/ng-bootstrap';

@Injectable()
export class RegisterInputDaoService extends DaoService  {
     olist :FirebaseObjectObservable<Object>;
     constructor(private authservice:AuthService,private af:AngularFire,private pcore:PraticaCore){
         super();
     }
     load(year:number,month:number,day:number, promise:Function )  {
       if (this.isChosenCompany()) {  
        this.olist = this.af.database.object(this.authservice.getPathBaseSis()+'/RegisterInput/'+year+'/'+month+'/'+day);
        this.olist.subscribe({next:oct=>{
           let ar:Object[]=this.pcore.toArray(oct);
           promise(ar);
        }});
       } 
     }
     isChosenCompany():Boolean {
       return (this.authservice.getPathBaseSis()!==null);
     }
     remove(key:string,promise?:Function,reject?:Function) {
      let obj:Object={};
       obj[key]={};
       this.olist.update(obj).then((a)=>(promise?promise(a):null)).catch((err)=>(reject?reject(err):null));

     }
     update(key:string,pc:RegisterInput,promise?:Function,reject?:Function) {
       let obj:Object={};
       obj[key]={};
       obj[key]=pc;
       this.olist.update(obj).then((a)=>(promise?promise(a):null)).catch((err)=>(reject?reject(err):null));
     }

     insert(pc:RegisterInput,promise?:Function,reject?:Function) {
       let id:string = this.pcore.geraId();
       let obj:Object={};
       obj[id]={};
       pc.id=id;
       obj[id]=pc;
       this.olist.update(obj).then((a)=>(promise?promise(a):null)).catch((err)=>(reject?reject(err):null));
     }
     modelToView(pm:RegisterInput,pv:RegisterInputView) {
        
        pv.horaFim = pm.horaFim;
        pv.horaIni = pm.horaIni;
        pv.id  = pm.id;
        pv.idcontact = pm.idcontact;
        pv.infoTables = pm.infoTables;
        pv.placa = pm.placa;
        pv.valor    = this.pcore.textToMoeda(pm.valor.toString());


        let di:Object={};
        di['day']=new Date(pm['day']).getDay();
        di['month'] = new Date(pm['day']).getMonth()+1;
        di['year'] = new Date(pm['day']).getFullYear();
        pv.day = di as NgbDateStruct;
     }
     viewToModel(pm:RegisterInput,pv:RegisterInputView) {

        pm.horaIni = pv.horaIni;
        pm.id  = pv.id;
        pm.idcontact = pv.idcontact;
        pm.infoTables = pv.infoTables;
        pm.placa = pv.placa;
        pm.valor =  this.pcore.maskToNumber(pv['valor']);
        pm.day = new Date(+pv['day']['year'],(+pv['day']['month'])-1,+pv['day']['day']);
        
     }

}
