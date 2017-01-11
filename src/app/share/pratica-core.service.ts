import { Injectable} from '@angular/core';


@Injectable()
export class PraticaCore {
    constructor() {}


    moedaToNumber(str:string )
    {
        return parseInt( str.replace(/[\D]+/g,'') );
        }

   textToMoeda( int:number):string 
    {
        var tmp = int+'';
        tmp = tmp.replace(/([0-9]{2})$/g, ",$1");
        if( tmp.length > 6 )
                tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");

        return tmp;
    }
    
 

   oForEach(pobj:Object,callback:Function){
      for (let i in pobj) {
         if (pobj.hasOwnProperty(i) && i.substr(0,1) !=='$') {
            callback(pobj[i],i);
         }
      }
   }
   toArray(pobj:Object):Object[]{
       let a:Object[]=[];
       this.oForEach(pobj,function(value,key){
         let b = value;
         b.$key=key;  
         a.push(b);
       });
       return a;
   }
   geraId():string {
        let size = 7 ; 
        let randomized = Math.ceil(Math.random() * Math.pow(10,size));
        let digito = Math.ceil(Math.log(randomized));
        while(digito > 10){//Pega o digito inicial e vai refinando até ele ficar menor que dez
			digito = Math.ceil(Math.log(digito));
		}
		var id = randomized + 'X' + digito;//Cria a ID
        return id;
    }
}