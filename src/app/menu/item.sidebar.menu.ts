export class ItemSidebarMenu {
   constructor(public classIcon:string,public link:string, public name:string){
   }
}
export const itensMenu:ItemSidebarMenu[]=[new ItemSidebarMenu('fa-table','/menu/contract','Contratos'),
                                          new ItemSidebarMenu('fa-gear','/menu/param','Parametro'),
                                          new ItemSidebarMenu('fa-blind','/menu/portaria','Portaria'),
];
