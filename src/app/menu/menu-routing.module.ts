import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MenuComponent }           from './menu.component';
import {HomeComponent}      from './home.component';



const menuRoutes: Routes = [
  {
    path: '',
    component: MenuComponent,
    children: [
      {path: '',
       component:HomeComponent}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(menuRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MenuRoutingModule {}
