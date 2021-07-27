import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { TemplateComponent } from './pages/template/template.component';
import { SharedModule } from '../../modules/shared/shared.module';
import { LoadingComponent } from './pages/loading/loading.component';
import { ProductosComponent } from './pages/loading/productos/productos.component';
import { ViewsComponent } from './pages/views/views.component';
import { ProductoComponent } from './pages/views/producto/producto.component';
import { AlertComponent } from './pages/views/alert/alert.component';


@NgModule({
  declarations: [TemplateComponent, LoadingComponent, ProductosComponent, ViewsComponent, ProductoComponent, AlertComponent],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    SharedModule
  ]
})
export class TemplateModule { }
