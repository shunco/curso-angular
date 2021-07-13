import { Component } from '@angular/core';
import { Menu } from './models/menu';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isOpen: boolean = true;

  public menus: Menu[] = [
    {
    title: 'Modulos',
    key: 'modulos',
    children: [
      {
        title: 'Componente de Modulos Externos',
        path: 'external_component'
      }, {
        title: 'Componentes Externos Web',
        path: 'web_component'
      }, {
        title: 'Modulo Carga Lenta',
        path: 'editor'
      }, {
        title: 'Componentes Internos',
        path: 'internal_component'
      }
    ]

  },

  {
    title: 'Routing',
    key: 'routing',
    children: [{
      title: 'Parametros',
      path: 'routing_params'
    }, {
      title: 'Productos',
      path: 'productos'
    }]

  },

  {
    title: 'Observable',
    key: 'observable',
    children: [{
      title: 'Weather',
      path: 'observable/weather'
    },{
      title: 'Carrito',
      path: 'observable/carrito'
    }]

  },

  {
    title: 'Usuario',
    path: 'usuarios'
  }]

}
