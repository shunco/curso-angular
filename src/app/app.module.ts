import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';
import { ExternalComponentComponent } from './pages/external-component/external-component.component';
import { DataTablesModule } from 'angular-datatables';
import { WebComponentComponent } from './pages/web-component/web-component.component';
import { InternalComponentsComponent } from './pages/internal-components/internal-components.component';
import { WebComponent } from './pages/internal-components/web/web.component';
import { ManagerComponent } from './pages/internal-components/manager/manager.component';
import { AdminComponent } from './pages/internal-components/admin/admin.component';
import { ArtComponent } from './pages/internal-components/art/art.component'; 

@NgModule({
  declarations: [
    AppComponent,
    ExternalComponentComponent,
    WebComponentComponent,
    InternalComponentsComponent,
    WebComponent,
    ManagerComponent,
    AdminComponent,
    ArtComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
