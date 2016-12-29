import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormsModule }    from '@angular/forms';
import {LoadingComponent} from '../loading/loading.component';
import {LoginRoutingModule} from './login-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LoginRoutingModule
  ],
  declarations: [LoginComponent,LoadingComponent],
  exports:[LoginComponent/*,LoadingComponent*/]
})
export class LoginModule { }
