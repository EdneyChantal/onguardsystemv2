import { Route } from '@angular/router';
import { ContractComponent } from './contract.component';
import {AuthGuard} from '../share/auth-guard.service'

export const ContractRoutes: Route[] = [
  	{
    	path: 'contract',
    	component: ContractComponent,
        canActivateChild:[AuthGuard]
  	}
];