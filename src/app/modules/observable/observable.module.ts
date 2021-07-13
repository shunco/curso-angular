import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObservableRoutingModule } from './observable-routing.module';
import { ObservableComponent } from './pages/observable/observable.component';
import { CarritoComponent } from './pages/carrito/carrito.component';


@NgModule({
  declarations: [ObservableComponent, CarritoComponent],
  imports: [
    CommonModule,
    ObservableRoutingModule
  ]
})
export class ObservableModule { }
