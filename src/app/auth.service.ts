import { Injectable } from '@angular/core';
import { AngularFire,FirebaseAuthState} from 'angularfire2';
import { Promise    } from 'firebase';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';


@Injectable()
export class AuthService {
  isLoggedIn: boolean = false;
  auth : FirebaseAuthState;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor(private af:AngularFire) {

  }


  login(username:string , passw: string ): Promise<any> {
    return  this.af.auth.login({email:username,password:passw}).then(auth => {
       this.isLoggedIn = true;
       this.auth = auth; 
       return 'ok';}).catch(this.handleError );
  }
  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message);
  }


  logout(): void {
    this.isLoggedIn = false;
  }
}
