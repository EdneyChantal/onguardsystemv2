import { Injectable } from '@angular/core';
import { AngularFire,FirebaseAuthState,FirebaseObjectObservable} from 'angularfire2';
import { Promise} from 'firebase';
import { User }       from './model/user'
import {Observable} from 'rxjs/observable';



@Injectable()
export class AuthService {
  isLoggedIn: boolean = false;
  lastErr: String;
  user : User;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor(private af:AngularFire) {
    
  }
  private getUser(username:string):FirebaseObjectObservable<User>  {
    var fuser: FirebaseObjectObservable<User>;
    fuser =  this.af.database.object('Users/'+username);
    return fuser;
    
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
  }
}
