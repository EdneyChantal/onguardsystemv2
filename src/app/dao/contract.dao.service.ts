import {Injectable} from '@angular/core';
import {DaoService} from './dao.service'
import {AngularFire,FirebaseObjectObservable,FirebaseListObservable} from 'angularfire2';
import {Promise} from 'firebase';
import {Observable} from 'rxjs/observable';
import {AuthService} from '../share/auth.service';
import {Contract} from '../model/contract';
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


}
