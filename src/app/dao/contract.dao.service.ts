import {Injectable} from '@angular/core';
import {DaoService} from './dao.service'
import {AngularFire,FirebaseObjectObservable,FirebaseListObservable} from 'angularfire2';
import {Promise} from 'firebase';
import {Observable} from 'rxjs/observable';
import {AuthService} from '../share/auth.service';
import {Contract} from '../model/contract';
import {ContractView}  from '../model/contractView' ; 
import {NgbDateStruct}              from '@ng-bootstrap/ng-bootstrap'
import {PraticaCore}         from '../share/pratica-core.service'

@Injectable()
export class ContractDaoService extends DaoService  {
     olist :FirebaseObjectObservable<Object>;
     constructor(private authservice:AuthService,private af:AngularFire,private pcore:PraticaCore){
         super();
     }
     load(promise:Function )  {
       if (this.isChosenCompany()) {  
        this.olist = this.af.database.object(this.authservice.getPathBaseSis()+'/Contract');
        this.olist.subscribe({next:oct=>{
           let ar:Object[]=this.pcore.toArray(oct);
           promise(ar);
        }});
       } 
     }
     isChosenCompany():Boolean {
       return (this.authservice.getPathBaseSis()!==null);
     }
     removeContract(key:string,promise?:Function,reject?:Function) {
      let obj:Object={};
       obj[key]={};
       this.olist.update(obj).then((a)=>(promise?promise(a):null)).catch((err)=>(reject?reject(err):null));

     }
     updateContract(key:string,pc:Contract,promise?:Function,reject?:Function) {
       let obj:Object={};
       obj[key]={};
       obj[key]=pc;
       this.olist.update(obj).then((a)=>(promise?promise(a):null)).catch((err)=>(reject?reject(err):null));
     }

     insertContract(pc:Contract,promise?:Function,reject?:Function) {
       let id:string = this.pcore.geraId();
       let obj:Object={};
       obj[id]={};
       obj[id]=pc;
       this.olist.update(obj).then((a)=>(promise?promise(a):null)).catch((err)=>(reject?reject(err):null));
     }
     modelToView(pm:Contract,pv:ContractView) {
        
        pv.description = pm.description;
        pv.namecontact = pm.namecontact;
        pv.emailContact = pm.emailContact;
        pv.qtdvagas =  pm.qtdvagas.toString();
        pv.valor    = this.pcore.textToMoeda(pm.valor.toString());
        pv.timemax = pm.timemax;

        let di:Object={};
        di['day']=new Date(pm['dtinivigencia']).getDay();
        di['month'] = new Date(pm['dtinivigencia']).getMonth()+1;
        di['year'] = new Date(pm['dtinivigencia']).getFullYear();
        pv.dtinivigencia = di as NgbDateStruct;
     
        let df:Object={};
        df['day']=new Date(pm['dtfimvigencia']).getDay();
        df['month'] = new Date(pm['dtfimvigencia']).getMonth()+1;
        df['year'] = new Date(pm['dtfimvigencia']).getFullYear();
        pv.dtfimvigencia = df as NgbDateStruct;

     }
     viewToModel(pm:Contract,pv:ContractView) {
        pm.description = pv['description'];      
        pm.namecontact = pv['namecontact'];
        pm.emailContact = pv['emailContact'];
        pm.qtdvagas    = +pv['qtdvagas'];
        pm.valor =  this.pcore.maskToNumber(pv['valor']);
        pm.timemax = pv['timemax'];
        pm.dtinivigencia = new Date(+pv['dtinivigencia']['year'],(+pv['dtinivigencia']['month'])-1,+pv['dtinivigencia']['day']);
        pm.dtfimvigencia = new Date(+pv['dtfimvigencia']['year'],(+pv['dtfimvigencia']['month'])-1,+pv['dtfimvigencia']['day']);
     }

}
