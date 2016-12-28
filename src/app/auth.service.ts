import { Injectable } from '@angular/core';
import { AngularFire,FirebaseAuthState,FirebaseObjectObservable} from 'angularfire2';
import { Promise} from 'firebase';
import { User }       from './model/user'
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/switchMap';
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
  getUser(username:string): FirebaseObjectObservable<User>  {
    var fuser: FirebaseObjectObservable<User>;
    fuser =  this.af.database.object('Users/'+username);
    return fuser;
    
  }

  login(username:string , passw: string ): Promise<any> {
    this.lastErr = null;
    return this.getUser(username).forEach(user=>{
       if (user.firstName) {
       return this.af.auth.login({email:user.email,password:passw}).then(a=>{
          this.user = user;  
          this.isLoggedIn = true;
          return Promise.resolve('ok');
       }).catch(err=>{
           this.lastErr=err.message;
           return Promise.reject(err);
       });   
       } else {
         this.lastErr="Login não encontrado";
         return Promise.reject(new Error('Login não encontrado'));
       }
    }).then(a=>Promise.resolve(a));


    //})
      // this.af.auth.login()

//    return this.getUser(username).toPromise().then(u =>{
  //     console.log(u);
  //  }).catch(err => {this.lastErr=err.message;
    //     return Promise.reject(err);
    //  });


    /*return this.getUser(username).subscribe(user=>{
       if (user.firstName) {
         this.af.auth.login({email:user.email,password:passw}).then(auth=>{
           this.isLoggedIn = true;
           this.user = user;
           return Promise.resolve('ok');
         }).catch(err =>{
           this.lastErr = err.message;
           return Promise.reject(err);
          })           
       } else {
         this.lastErr = "Login não cadastrado";
         return Promise.reject('error');
       }       
    });*/
    
    
  }
  
  logout(): void {
    this.isLoggedIn = false;
  }
}
