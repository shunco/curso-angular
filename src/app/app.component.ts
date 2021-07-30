import { Component, OnInit } from '@angular/core';
import { Menu } from './models/menu';

import { NotificationService } from './services/notification.service';

import { Observable } from 'rxjs';
import { Message, TypeMessage } from './models/message';

import { NotifierService } from 'angular-notifier';
import { AuthService } from './services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isOpen: boolean = true;

  notication$: Observable<Message>;
  private readonly notifier: NotifierService;

  user$: Observable<any>;

  constructor(private notificationService: NotificationService, notifierService: NotifierService,
    private authService: AuthService) {

    this.notifier = notifierService;

  }



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
          path: 'web_component',
          required_auth: true
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
      required_auth: true,
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
      }, {
        title: 'Carrito',
        path: 'observable/carrito'
      }, {
        title: 'Movie DB',
        path: 'observable/moviedb',
        required_auth: true
      },{
        title: 'Factura',
        path: 'observable/factura'
      }]

    },
    {
      title: 'Eventos',
      path: 'events'
    },
    {
      title: 'Template',
      key: 'template',
      required_auth: true,
      children: [{
        title: 'Content',
        path: 'template/content'
      },{
        title: 'loading',
        path: 'template/loading'
      },{
        title: 'views',
        path: 'template/views'
      }, {
        title: 'Dynamic Components',
        path: 'template/dynamic-components'
      }]

    }, 



    {
      title: 'Usuario',
      path: 'usuarios'
    }]


  public ngOnInit() {

    this.user$ = this.authService.user.asObservable();


    this.notication$ = this.notificationService.getNotifObservable();

    this.notication$.subscribe(message => {

      if(message.type === TypeMessage.SUCCESS){
        this.notifier.notify('success', message.message);
      }else if(message.type === TypeMessage.ERROR){
        this.notifier.notify('error', message.message);
      }

    });




  }


  public logout(){
    this.authService.logout();
  }

}
