import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule,AuthProviders,AuthMethods } from 'angularfire2';
import { AppRoutingModule }  from './share/app-routing.module';
import { AuthService } from './share/auth.service';

import {PraticaCore}  from  './share/pratica-core.service'
import {AppComponent } from './app.component';
import {LoginModule} from './share/login/login.module';
import {MenuModule} from './share/menu/menu.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {onGuardConfig} from './myapp-config';
import {ContractModule} from './contract/contract.module';
import {ValorMoedaDirective} from './share/valormoeda.directive';
import {ParameterModule} from './parameter/parameter.module';
import {TableModule } from './table/table.module';
import {PortariaModule} from './portaria/portaria.module';




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
    AppComponent,ValorMoedaDirective 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MenuModule,
    HttpModule,
    LoginModule,
    ContractModule,
    AppRoutingModule,
    ParameterModule,
    TableModule ,
    PortariaModule,
    AngularFireModule.initializeApp(firebaseConfig,myFirebaseAuthConfig),
    NgbModule.forRoot()
  ],
  providers: [PraticaCore,{provide:'APP_CONFIG',useValue:onGuardConfig},AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
