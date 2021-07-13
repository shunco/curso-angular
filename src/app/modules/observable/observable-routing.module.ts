import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObservableComponent } from './pages/observable/observable.component';
import { CarritoComponent } from './pages/carrito/carrito.component';

const routes: Routes = [
  { path: 'weather', component: ObservableComponent },
  { path: 'carrito', component: CarritoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObservableRoutingModule {
  
 }
