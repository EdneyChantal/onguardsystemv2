export class Contract{
   private _description:string;
   dtfimvigencia:Date;
   dtinivigencia:Date;
   emailContact:String;
   nomecontact:string;
   qtdvagas:number;
   valor:number;
   constructor() {}
   get description():string {
     return this._description;
   }
   set description(nv:string) {
       this._description=nv;
   }

}