import { Injectable} from '@angular/core';
import {CurrencyPipe} from '@angular/common';


@Injectable()
export class PraticaCore {
    constructor(private curpp:CurrencyPipe) {}


  textToMoeda(data:string ):string {
      let sinal = 1;    
      if (data.substr(0,1) === '-') {
           sinal = -1;    
      }
      if (data.substr(0,1) === '(') {
           sinal = -1;    
      }
	  data  = data.replace(/[^0-9]+/g,"");
      if (parseInt(data) === 0){
           return '0';
       } else if ((data === "") && (sinal < 0)) {
           return "-";
       }  else {
           return this.curpp.transform((parseInt(data)*sinal)/100); 
       }
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