import {Injectable} from '@angular/core';
import {DaoService} from './dao.service'
import {AngularFire,FirebaseObjectObservable,FirebaseListObservable} from 'angularfire2';
import {Promise} from 'firebase';
import {Observable} from 'rxjs/observable';
import {AuthService} from '../share/auth.service';
import {PraticaCore}     from '../share/pratica-core.service'
import {Table} from '../model/table';

@Injectable()
export class TableDaoService extends DaoService  {
     olist :FirebaseObjectObservable<Object>;
     constructor(private authservice:AuthService,private af:AngularFire,private pcore:PraticaCore){
         super();
     }
     load(keycontract:string, promise:Function )  {
       if (this.isChosenCompany()) {  
        this.olist = this.af.database.object(this.authservice.getPathBaseSis()+'/Table/'+keycontract);
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
     update(key:string,pc:Table,promise?:Function,reject?:Function) {
       let obj:Object={};
       obj[key]={};
       obj[key]=pc;
       this.olist.update(obj).then((a)=>(promise?promise(a):null)).catch((err)=>(reject?reject(err):null));
     }

     insert(pc:Table,promise?:Function,reject?:Function) {
       let id:string = this.pcore.geraId();
       let obj:Object={};
       obj[id]={};
       pc.id=id;
       obj[id]=pc;
       this.olist.update(obj).then((a)=>(promise?promise(a):null)).catch((err)=>(reject?reject(err):null));
     }
}
