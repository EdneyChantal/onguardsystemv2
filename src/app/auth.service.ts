import { Injectable } from '@angular/core';
import { AngularFire,} from 'angularfire2';
import { Promise    } from 'firebase';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';




@Injectable()
export class AuthService {
  isLoggedIn: boolean = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor(private af:AngularFire) {

  }


  login(): Promise<any> {
    return  this.af.auth.login().then(auth => {
       this.isLoggedIn = true; 
       return 'ok';}).catch(err => err);
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
