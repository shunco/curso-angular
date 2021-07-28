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
import { DynamicComponentsComponent } from './pages/dynamic-components/dynamic-components.component';
import { Card1Component } from './pages/dynamic-components/card1/card1.component';
import { Card2Component } from './pages/dynamic-components/card2/card2.component';
import { Card3Component } from './pages/dynamic-components/card3/card3.component';


@NgModule({
  declarations: [TemplateComponent, LoadingComponent, ProductosComponent, ViewsComponent, ProductoComponent, AlertComponent, DynamicComponentsComponent, Card1Component, Card2Component, Card3Component],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    SharedModule
  ], entryComponents:[Card1Component, Card2Component, Card3Component]
})
export class TemplateModule { }
