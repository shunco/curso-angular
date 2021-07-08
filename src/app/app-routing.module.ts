import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExternalComponentComponent } from './pages/external-component/external-component.component';
import { WebComponentComponent } from './pages/web-component/web-component.component'; 
import { InternalComponentsComponent } from './pages/internal-components/internal-components.component'; 
import { RoutingParamsComponent } from './pages/routing-params/routing-params.component'; 


const routes: Routes = [{
  path: 'external_component',
  component: ExternalComponentComponent
},{
  path: 'web_component',
  component: WebComponentComponent
},
  { path: 'editor', loadChildren: () => import('./editor/editor.module').then(m => m.EditorModule) },
  
  {
    path: 'internal_component',
    component: InternalComponentsComponent
  },{
    path:'routing_params',
    component:RoutingParamsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
