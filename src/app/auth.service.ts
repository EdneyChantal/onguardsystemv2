import { Injectable } from '@angular/core';
import { AngularFire,FirebaseAuthState,FirebaseObjectObservable} from 'angularfire2';
import { Promise    } from 'firebase';
import 'rxjs/add/operator/toPromise';



@Injectable()
export class AuthService {
  isLoggedIn: boolean = false;
  lastErr: String;
  user : Object;
  authn 
  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor(private af:AngularFire) {
    
  }
  getUser(username:string): Promise<Object>  {
    return  this.af.database.object('Users/'+username).toPromise().then(obj=>obj as Object).catch(err => this.lastErr = err.message);       
  }

  login(username:string , passw: string ): Promise<any> {
    this.getUser(username).then(obj=>console.log(obj));
    this.lastErr = null;
    return  this.af.auth.login({email:username,password:passw}).then(auth => {
       this.isLoggedIn = true; }).catch(err =>this.lastErr = err.message);
  }
  
  logout(): void {
    this.isLoggedIn = false;
  }
}
