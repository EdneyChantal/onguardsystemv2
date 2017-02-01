import { Route } from '@angular/router';
import { ParameterComponent } from './parameter.component';
import {AuthGuard} from '../share/auth-guard.service'

export const ParameterRoutes: Route[] = [
  	{
    	path: 'param',
    	component: ParameterComponent,
        canActivateChild:[AuthGuard]
  	}
];