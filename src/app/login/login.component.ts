import { Component, OnInit } from '@angular/core';
import { Login  }      from "../login";
import {AuthService}              from '../auth.service'; 
import {Router}   from '@angular/router';
import {NgForm,NgModel} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login :Login;
  constructor(private authservice:AuthService,private router:Router) { 
  }
  mLogin(){
     this.authservice.login(this.login.name,this.login.password).then( (a) => {this.router.navigate(['/menu']);}).catch((err)=>this.login.logerros = err.message);

  }
  ngOnInit() {
    this.login = new Login('','','');
  }

}
