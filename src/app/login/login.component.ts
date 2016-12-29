import { Component, OnInit } from '@angular/core';
import { Login  }      from "../model/login";
import {AuthService}              from '../auth.service'; 
import {Router}   from '@angular/router';
import {NgForm,NgModel} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] ,
})
export class LoginComponent implements OnInit {
  login :Login;
  canDisplay:boolean;
  constructor(private authservice:AuthService,private router:Router) { 
  }
  mLogin(){
     this.authservice.login(this.login.name,this.login.password,()=>this.router.navigate(['/menu']));
  }
  ngOnInit() {
    this.login = new Login('','','');
    this.canDisplay=true;
  }

}
