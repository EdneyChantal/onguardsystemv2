import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { MenuRoutingModule }         from './menu-routing.module';
import {TopNavComponent} from './topnav/topnav';
import {SidebarComponent} from './sidebar/sidebar'
import {HomeComponent} from './home.component'


@NgModule({
  imports: [
    CommonModule,
    MenuRoutingModule
  ],
  declarations: [MenuComponent,TopNavComponent,SidebarComponent,HomeComponent]
})
export class MenuModule { }
