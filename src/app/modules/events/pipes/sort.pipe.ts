import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';
import * as moment from 'moment';


/*

 {{ facturas  | sort: 'date': 'name'   }}


 {{ text | translate: 'es' }}


*/

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {


  /*transform(facturas: any[], key: string, order: string): any{

    if(!key && !order){
      facturas = _.orderBy(facturas, ['id'], ['asc']);

    }else if(key){
      if(key === 'date'){
        facturas = this.setTimestamp(facturas);
        facturas = _.orderBy(facturas, ['timestamp'], ['asc']);
      }else {
        facturas = _.orderBy(facturas, [key], ['asc']);
      }
    }else if(key && order){
      if(key === 'date'){
        facturas = this.setTimestamp(facturas);
        facturas = _.orderBy(facturas, ['timestamp'], [order]);
      }else {
        facturas = _.orderBy(facturas, [key], [order]);
      }
    }
  }*/





  transform(facturas: any[], ...args: string[]): any {

    console.log("entree");

    if (args.length === 0) {
      facturas = _.orderBy(facturas, ['id'], ['asc']);
    }else if(args.length === 1){

      if(args[0] === 'date'){
        facturas = this.setTimestamp(facturas);
        facturas = _.orderBy(facturas, ['timestamp'], ['asc']);
      }else {
        facturas = _.orderBy(facturas, [args[0]], ['asc']);
      }

    }else if(args.length === 2){

      

      if(args[0] === 'date'){
        facturas = this.setTimestamp(facturas);
        facturas = _.orderBy(facturas, ['timestamp'], [args[1]]);
      }else {
        facturas = _.orderBy(facturas, [args[0]], [args[1]]);
      }

    }


    console.log(facturas);


    return facturas;
  }


  public setTimestamp(facturas: any[]): any{

    for(let i=0; i< facturas.length; i++){
      facturas[i]['timestamp'] = moment(facturas[i].date).valueOf();
    }

    return facturas;



  }




}
