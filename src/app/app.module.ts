import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AppRoutingModule }  from './app-routing.module';


import { AppComponent  } from './app.component';
import { LoginModule } from './login/login.module';
import { MenuModule } from './menu/menu.module';
 


// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyCORKDPWChZ4iWsKc9DO83kMe0MLTdUPSk",
         authDomain: "lucrofacil.firebaseapp.com",
         databaseURL: "https://lucrofacil.firebaseio.com",
        storageBucket: "project-2438716610560293642.appspot.com",
};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    LoginModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
