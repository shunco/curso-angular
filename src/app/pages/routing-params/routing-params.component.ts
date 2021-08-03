import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfileService } from 'src/app/services/profile.service';
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

  usuario$: Observable<any>;



  constructor(private profileService: ProfileService) {

   }

  ngOnInit() {

    this.usuario$ = this.profileService.getProfile();


  }

}
