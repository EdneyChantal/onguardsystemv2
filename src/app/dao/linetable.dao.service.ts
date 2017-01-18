import {Injectable} from '@angular/core';
import {DaoService} from './dao.service'
import {AngularFire,FirebaseObjectObservable,FirebaseListObservable} from 'angularfire2';
import {Promise} from 'firebase';
import {Observable} from 'rxjs/observable';
import {AuthService} from '../share/auth.service';
import {PraticaCore}     from '../share/pratica-core.service'
import {TableLine} from '../model/tableline';

@Injectable()
export class LineTableDaoService extends DaoService  {
     olist :FirebaseObjectObservable<Object>;
     constructor(private authservice:AuthService,private af:AngularFire,private pcore:PraticaCore){
         super();
     }
     load(keycontract:string,keytable:string, promise:Function )  {
       if (this.isChosenCompany()) {  
        this.olist = this.af.database.object(this.authservice.getPathBaseSis()+'/LineTable/'+keycontract+'/'+keytable);
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
     update(key:string,pc:TableLine,promise?:Function,reject?:Function) {
       let obj:Object={};
       obj[key]={};
       obj[key]=pc;
       this.olist.update(obj).then((a)=>(promise?promise(a):null)).catch((err)=>(reject?reject(err):null));
     }

     insert(keycontract:string,keytable:string,pc:TableLine,promise?:Function,reject?:Function) {
       let id:string = this.pcore.geraId();
       let obj:Object={};
       obj[id]={};
       pc.id=id;
       pc.idContract = keycontract; 
       pc.idTable= keytable;
       obj[id]=pc;
       this.olist.update(obj).then((a)=>(promise?promise(a):null)).catch((err)=>(reject?reject(err):null));
     }
}
