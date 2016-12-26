import { Component, OnInit } from '@angular/core';
import { Login  }      from "../login";
import {AuthService}              from '../auth.service'; 
import {Router}   from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login = new Login('edney','2'); 
  constructor(private authservice:AuthService,private router:Router) { 
  }
  mLogin(){
      this.authservice.isLoggedIn = true;
      this.router.navigate(['/menu']);

  }
  ngOnInit() {
    this.login = new Login('','');
  }

}
