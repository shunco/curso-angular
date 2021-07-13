import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ObservableComponent } from './observable.component';

const routes: Routes = [{ path: 'weather', component: ObservableComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObservableRoutingModule { }
