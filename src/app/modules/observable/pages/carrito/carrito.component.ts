import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../../../services/notification.service';
import {Message, TypeMessage} from '../../../../models/message'

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  constructor(private notifiService: NotificationService) {

   }

  ngOnInit() {
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
