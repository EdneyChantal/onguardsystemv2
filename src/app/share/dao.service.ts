import { Injectable,Inject } from '@angular/core';
import { AngularFire,FirebaseObjectObservable,FirebaseListObservable} from 'angularfire2';
import { Promise} from 'firebase';
import {Observable} from 'rxjs/observable';
import {AuthService} from './auth.service';

@Injectable()
export class DaoService {
    constructor(private authservice:AuthService,private af:AngularFire){}



}
