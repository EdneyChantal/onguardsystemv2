import { Component, OnInit } from '@angular/core';
import { Login  }      from "../login"; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login = new Login('edney','2'); 
  constructor() { 
     

  }
  ngOnInit() {
    this.login = new Login('','');
  }

}
