import { OpaqueToken } from '@angular/core';

export interface AppConfig {
  siglaApp: string ,
  refAppRoot:string
}

export const onGuardConfig: AppConfig = {
  siglaApp:'CASY',
  refAppRoot:'BaseCarSystem'
};

export let APP_CONFIG = new OpaqueToken('app.config');

export class AppConfig implements AppConfig {}  