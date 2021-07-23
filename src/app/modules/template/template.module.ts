import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { TemplateComponent } from './pages/template/template.component';
import { SharedModule } from '../../modules/shared/shared.module';
import { LoadingComponent } from './pages/loading/loading.component';
import { ProductosComponent } from './pages/loading/productos/productos.component';


@NgModule({
  declarations: [TemplateComponent, LoadingComponent, ProductosComponent],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    SharedModule
  ]
})
export class TemplateModule { }
