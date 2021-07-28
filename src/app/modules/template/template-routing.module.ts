import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemplateComponent } from './pages/template/template.component';
import { LoadingComponent } from './pages/loading/loading.component';
import { ViewsComponent } from './pages/views/views.component';
import { DynamicComponentsComponent } from './pages/dynamic-components/dynamic-components.component';

const routes: Routes = [
  { path: 'content', component: TemplateComponent },
  { path: 'loading', component: LoadingComponent },
  { path: 'views', component: ViewsComponent },
  { path: 'dynamic-components', component: DynamicComponentsComponent }];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
