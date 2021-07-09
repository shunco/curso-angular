import { Component, OnInit } from '@angular/core';
import { Usuario} from '../../models/usuario';

@Component({
  selector: 'app-routing-params',
  templateUrl: './routing-params.component.html',
  styleUrls: ['./routing-params.component.css']
})
export class RoutingParamsComponent implements OnInit {

  usuario: Usuario = {
    id: 'dssgslkdñfgf',
    name: 'Benito',
    type: 'web'
  }

  constructor() { }

  ngOnInit() {
  }

}
