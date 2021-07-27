import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import {AlertComponent} from '../views/alert/alert.component';

import { ProductoComponent} from './producto/producto.component';

@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.css']
})
export class ViewsComponent implements OnInit {


  @ViewChild('alerta', {static: false}) alert: AlertComponent;

  @ViewChildren('lista_productos') lista: QueryList<ProductoComponent>;

  



  productos1: {name: string; id: number; }[]= [{
    name:'Producto 1',
    id: 1
  },{
    name:'Producto 2', 
    id:2
  },{
    name:'Producto 3',
    id: 3
  },{
    name:'Producto 4',
    id: 4

  }]


  productos2: {name: string; id: number;}[]= [{
    name:'Producto 5',
    id: 5
  },{
    name:'Producto 6',
    id: 6
  },{
    name:'Producto 7',
    id: 7
  },{
    name:'Producto 8',
    id: 8
  }]

  constructor() {

   }

 

  ngOnInit() {

  }


  move(){

    this.lista.forEach((item: ProductoComponent, index: number)=> {

      if(item.isSelected()){
        this.productos2.push(this.productos1[index]);
      }
      

    });

    this.productos1 = this.productos1.filter(producto_izquierdo=> {
      let found_product = this.productos2.find(producto_derecho=> producto_izquierdo.id === producto_derecho.id ); 
      console.log(found_product);
      return found_product === undefined;
  
      //return !found_product;

    });





    this.alert.setMessage('He movido los productos');

  }

  

}
