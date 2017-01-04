import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule,AuthProviders,AuthMethods } from 'angularfire2';
import { AppRoutingModule }  from './app-routing.module';
import { AuthService } from './auth.service';


import { AppComponent  } from './app.component';
import { LoginModule } from './login/login.module';
import { MenuModule } from './menu/menu.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppConfig,onGuardConfig,APP_CONFIG} from './app-config'


// Must export the config
const firebaseConfig = {
  apiKey: "AIzaSyCORKDPWChZ4iWsKc9DO83kMe0MLTdUPSk",
         authDomain: "lucrofacil.firebaseapp.com",
         databaseURL: "https://lucrofacil.firebaseio.com",
        storageBucket: "project-2438716610560293642.appspot.com",
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
}




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MenuModule,
    HttpModule,
    LoginModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig,myFirebaseAuthConfig),
    NgbModule.forRoot()
  ],
  providers: [{provide:APP_CONFIG,useValue:onGuardConfig},AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
