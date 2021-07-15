import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../../../services/notification.service';
import {Message, TypeMessage} from '../../../../models/message';
import { CarritoService } from '../../services/carrito.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  productos$: Observable<any[]>;

  constructor(private notifiService: NotificationService, private carritoService: CarritoService) {



   }

  ngOnInit() {
    this.productos$ = this.carritoService.getProductos();
  }


  public removeItem(){
    this.notifiService.notify({
      message:'Se elimino el producto',
      type: TypeMessage.ERROR
    })

  }


  public applyPromo(){
    this.notifiService.notify({
      message:'Se aplico un promocion',
      type: TypeMessage.SUCCESS
    })
  }

}
