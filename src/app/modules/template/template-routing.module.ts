import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemplateComponent } from './pages/template/template.component';
import { LoadingComponent } from './pages/loading/loading.component';

const routes: Routes = [{ path: 'content', component: TemplateComponent },
{ path: 'loading', component: LoadingComponent }];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
