import { Component } from '@angular/core';
import { Menu } from './models/menu';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isOpen: boolean = true;

  public menus: Menu[] = [{
    title: 'Modulos',
    key: 'modulos',
    children: [
      {
        title: 'Componente de Modulos Externos',
        path: 'external_component'
      }, {
        title: 'Componentes Internos',
        path: 'componente_internos'
      },{
        title: 'Componentes Externos Web',
        path: 'web_component'
      },{
        title: 'Modulo Carga Lenta',
        path: 'editor'
      }
    ]

  },{
    title: 'Usuario',
    path: 'usuarios'
  }]

}
