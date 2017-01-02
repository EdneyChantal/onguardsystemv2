import { Injectable } from '@angular/core';
import { AngularFire,FirebaseAuthState,FirebaseObjectObservable,AngularFireAuth} from 'angularfire2';
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
     this.af.auth.subscribe(auth =>{
        this.getUserbyUid(auth.uid).subscribe({next:login=>{
           console.log(login);
           this.getUser(login).subscribe({next:user=>{
                console.log(user);
                if (user) {
                   this.user = user;
                   this.isLoggedIn = true;
                }
           },
          error:err=>console.log(err) 
          });//getUser
        },error: err=>console.log(err)});//getUserbyUid

    });

  }
  private getUserbyUid(puid:string):FirebaseObjectObservable<string>{
    console.log(puid);
     return  this.af.database.object(`UserLogin/$(puid)`);
  }
  private getUser(username:string):FirebaseObjectObservable<User>  {
    
    return this.af.database.object('Users/'+username);
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
