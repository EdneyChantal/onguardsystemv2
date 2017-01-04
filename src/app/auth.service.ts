import { Injectable,Inject } from '@angular/core';
import { AngularFire,FirebaseAuthState,FirebaseObjectObservable,AngularFireAuth,FirebaseListObservable} from 'angularfire2';
import { Promise} from 'firebase';
import { User }       from './model/user'
import { Company }       from './model/company'
import { Observable} from 'rxjs/observable';
import { Router} from '@angular/router';
import {AppConfig,APP_CONFIG} from './app-config' 


@Injectable()
export class AuthService {
  isLoggedIn: boolean = false;
  lastErr: String;
  user : User;
  companys :Company[];
  chosenCompany:Company;
  siglaApp:string;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  

  constructor(private af:AngularFire,private router:Router, @Inject(APP_CONFIG) config: AppConfig ) {
    this.siglaApp=config.siglaApp;
     let actionOk:Function  = function(puser:User,pthis:AuthService) {
           if (puser) {
                   pthis.user = puser;
                   pthis.isLoggedIn = true;
                   router.navigate(['/menu']);
                }
      }

      this.af.auth.subscribe(auth =>{
        this.getUserbyUid(auth.uid,login => {
           this.getUser(login).subscribe({next:user=>this.getCompanysUser(user,actionOk)});
        });
    });
    
  }
  chooseCompany(pCompany:Company) {
    this.chosenCompany = pCompany;
  }
  private getUserbyUid(puid:string,promise:Function,ferr?:Function){
     let pr : FirebaseObjectObservable<Object>;
     pr = this.af.database.object('UserLogin');
     pr.subscribe({next:obj=>promise(obj[puid]),error:err=>ferr(err)});
  }
  private getUser(username:string):FirebaseObjectObservable<User>  {
    return this.af.database.object('Users/'+username);
  }
  private getCompanysUser(puser:User,promise:Function,ferr?:Function) {
    let findCompanys: Function  = function(pcompanys:Object,pcompUser:string[]) {
        let gCompy:Company[]=[];
        pcompUser.map(keycomp=>gCompy.push(pcompanys[keycomp]) );
        return gCompy;
    }
    this.af.database.object('Companys').subscribe({next:companys=>{
         let a:Company[] = (companys as Company[]);
         a.map(function(value){
           console.log(value);
         })
         this.companys = findCompanys(companys as Company[],puser.companys as string[]);  
         promise(puser,this);
    },error:err=>{
     if (ferr){
       ferr(err);
      }
    }});
  }
  private verLoginBase(puser:User,passw:string ):Promise<User> {
      if (puser.firstName) {
        return  this.af.auth.login({email:puser.email,password:passw}).then(a=>{
               this.user = puser;  
               this.isLoggedIn = true;
               return puser; }).catch(err=>{
                this.lastErr=err.message;
                return Promise.reject(err);
              });
      } else {
         this.lastErr="Login não encontrado";
         return Promise.reject(new Error('Login não encontrado'));
      }
  }
  login(username:string , passw: string ,fsubscribe: Function, fsubscErr?:Function) {
    this.lastErr = null;
    this.getUser(username).subscribe(user=>{
       this.verLoginBase(user,passw).then(us=>{
         if (fsubscribe) {
            fsubscribe();
         };
       }).catch(err=>{
           if (fsubscErr){
             fsubscErr();
           }
       });
    });
  }
  
  logout(): void {
    this.isLoggedIn = false;
    this.af.auth.logout();
  }
}
