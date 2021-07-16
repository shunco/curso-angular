import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObservableComponent } from './pages/observable/observable.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { MoviedbComponent } from './pages/moviedb/moviedb.component';
import { InvoiceComponent } from './pages/invoice/invoice.component'

const routes: Routes = [
  { path: 'weather', component: ObservableComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: 'moviedb', component: MoviedbComponent }, 
  { path: 'factura', component: InvoiceComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObservableRoutingModule {
  
 }
