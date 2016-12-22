import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent  } from './app.component';
import { LoginModule } from './login/login.module';
import { LoginComponent  } from './login/login.component'; 


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    LoginModule,
    RouterModule.forRoot([{
      path: '',
    	component: LoginComponent
    }]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
