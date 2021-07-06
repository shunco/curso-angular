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
        path: 'componente_externos'
      }, {
        title: 'Componentes Internos',
        path: 'componente_internos'
      },{
        title: 'Componentes Externos Web',
        path: 'componentes_externo_web'
      },{
        title: 'Modulo Carga Lenta',
        path: 'module_carga_lenta'
      }
    ]

  },{
    title: 'Usuario',
    path: 'usuarios'
  }]

}
