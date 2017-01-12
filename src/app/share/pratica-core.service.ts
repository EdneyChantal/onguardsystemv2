import { Injectable} from '@angular/core';


@Injectable()
export class PraticaCore {
    constructor() {}


    moedaToNumber(str:string )
    {
        return parseInt( str.replace(/[\D]+/g,'') );
        }

   textToMoeda( data:string):string{
        let sinal = 1; 
        sinal = 1;    
        let retorno:string;
        if (data.substr(0,1) === '-') {
           sinal = -1;    
        }
        if (data.substr(0,1) === '(') {
           sinal = -1;    
        }
		data  = data.replace(/[^0-9]+/g,"");
        data  = parseInt(data).toString();
        if (parseInt(data) === 0){
             return '0';
        } else if ((data === "") && (sinal < 0)) {
           return "-";
        }
        if (data.length == 1 ) {
           retorno = '0,0' + data;
        }
        if (data.length == 2 ) {
           retorno = '0,' + data;
        }
        console.log(data);
        if (data.length >= 3) {
           let partedecimal:string = data.substr(data.length-2,2);
           let parteinteira:string  = data.substr(0,data.length-2);
           let qtdend :number = parteinteira.length%3; 
           let partemeio:string = parteinteira.substr(qtdend);
           let qtdpontos :number= Math.trunc(parteinteira.length/3);

           // inicio
           retorno = parteinteira.substr(0,qtdend);
           // meio
           for (let i = 0;i<=(qtdpontos-1);i++) {
                retorno += '.'
                retorno += partemeio.substr(i*3,3);
           }
           // decimal
           retorno += "," + partedecimal;
        }
        return retorno;
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