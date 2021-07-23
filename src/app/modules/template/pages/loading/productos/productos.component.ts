import { Component, OnInit, TemplateRef, Input } from '@angular/core';
import {ProductosService} from '../../../services/productos.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
  providers: [ProductosService]

})
export class ProductosComponent implements OnInit {

  productos$: Observable<any[]>;

  @Input() customTemplate: TemplateRef<any>;


  constructor(private service: ProductosService) { 
    
  }


  ngOnInit() {

    this.productos$ = this.service.getProductos();

  }

}
