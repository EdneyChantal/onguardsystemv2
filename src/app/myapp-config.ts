import { OpaqueToken } from '@angular/core';
import { AppConfig,ItemSidebarMenu} from './share/app-config';

const item1:ItemSidebarMenu={classIcon:'fa-table',
                             link:'/menu/contract',
                             name:'Contratos'};
const item2:ItemSidebarMenu={classIcon:'fa-gear',
                             link:'/menu/param',
                             name:'Parametro'};
const item3:ItemSidebarMenu={classIcon:'fa-blind',
                             link:'/menu/portaria',
                             name:'Portaria'};
                             




export const onGuardConfig: AppConfig = {
  siglaApp:'CASY',
  refAppRoot:'BaseCarSystem',
  descriptionSidebar:'Gestão de Estacionamento',
  pathFigLogo:'assets/img/logo-onguardsystem.png',
  itensMenu:[item1,item2,item3]
};

//export let APP_CONFIG = new OpaqueToken('app.config');

//export class AppConfig implements AppConfig {}  