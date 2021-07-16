import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObservableRoutingModule } from './observable-routing.module';
import { ObservableComponent } from './pages/observable/observable.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { MoviedbComponent } from './pages/moviedb/moviedb.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule} from '../../modules/shared/shared.module';
import { InvoiceComponent } from './pages/invoice/invoice.component'


@NgModule({
  declarations: [ObservableComponent, CarritoComponent, MoviedbComponent, InvoiceComponent],
  imports: [
    CommonModule,
    ObservableRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule
  ]
})
export class ObservableModule { }
