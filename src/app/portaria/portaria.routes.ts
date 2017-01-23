import { Route } from '@angular/router';
import { PortariaComponent } from './portaria.component';
import {AuthGuard} from '../auth-guard.service'

export const PortariaRoutes: Route[] = [
  	{
    	path: 'portaria',
    	component: PortariaComponent,
        canActivateChild:[AuthGuard]
  	}
];