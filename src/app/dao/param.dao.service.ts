import {Injectable} from '@angular/core';
import {DaoService} from './dao.service'
import {AngularFire,FirebaseObjectObservable,FirebaseListObservable} from 'angularfire2';
import {Promise} from 'firebase';
import {Observable} from 'rxjs/observable';
import {AuthService} from '../share/auth.service';
import {PraticaCore}         from '../share/pratica-core.service'
import {Parameter}  from '../model/param'

@Injectable()
export class ParamDaoService extends DaoService  {
     olist :FirebaseObjectObservable<Object>;
     constructor(private authservice:AuthService,private af:AngularFire,private pcore:PraticaCore){
         super();
     }
     isChosenCompany():Boolean {
       return (this.authservice.getPathBaseSis()!==null);
     }
     load(promise:Function )  {
       if (this.isChosenCompany()) {  
        this.olist = this.af.database.object(this.authservice.getPathBaseSis()+'/ParamConfig');
        this.olist.subscribe({next:oct=>{
           promise(oct);
        }});
       } 
     }
     insertContract(pc:Parameter,promise?:Function,reject?:Function) {
       let ob:Parameter= new Parameter();
       ob.gerenteAdmin = pc['gerenteAdmin'];
       ob.totalvagas = pc['totalvagas'];

       this.olist.set(ob).then((a)=>(promise?promise(a):null)).catch((err)=>(reject?reject(err.message):null));
     }
     
}