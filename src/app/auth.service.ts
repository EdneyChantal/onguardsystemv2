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
  getUser(username:string):FirebaseObjectObservable<User>  {
    var fuser: FirebaseObjectObservable<User>;
    fuser =  this.af.database.object('Users/'+username);
    return fuser;
    
  }
  verLoginBase(puser:User,passw:string ):Promise<User> {
     debugger;
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
  login(username:string , passw: string ): Promise<any> {
    this.lastErr = null;
    let vus = new User('Edney','Chantal',99,'','edney.chantal@gmail.com','','',{});

    /*return this.verLoginBase(vus,'@senha123').then(us=>{console.log(us);
      return 'ok';  
    }).
      catch(err=>{console.log(err);
        return Promise.reject(err);
     });*/
    
    
    return this.getUser(username).forEach(us=>us).then(vus=>vus).catch(err=>Promise.reject(err));
    
    /*return this.getUser(username).forEach(user=>{
       if (user.firstName) {
          this.af.auth.login({email:user.email,password:passw}).then(a=>{
          this.user = user;  
          this.isLoggedIn = true;
          Promise.resolve('ok');
               }).catch(err=>{
           this.lastErr=err.message;
           return Promise.reject(err);
          });   
       } else {
         this.lastErr="Login não encontrado";
         return Promise.reject(new Error('Login não encontrado'));
       }
    });*/
   //return this.getUser(username).switchMap(user=>user).




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
