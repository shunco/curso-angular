import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class IsAuthGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(private authService: AuthService, private router: Router) {


  }

  /* bloque una sola direccion  */

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    console.log("ENTRE AL GUARDIAN");

    let user = this.authService.user.getValue();

    if (user != null) {
      return true;
    }

    //Es para enviarte a una pagina con un error que no se encontro o no tuvo acceso
    this.router.navigate(['/404']);


    return false;
  }

  /* bloque todos los hijos d una direccion  */

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    let user = this.authService.user.getValue();

    if (user != null) {
      return true;
    }

    this.router.navigate(['/404']);

    return false;
  }

    /* bloquea los path que cargan modulos de carga lenta o retardada  */

  canLoad(
    route: Route,
    segments: UrlSegment[]): boolean {

    console.log("ENTRE AL GUARDIAN");

    let user = this.authService.user.getValue();

    if (user != null) {
      return true;
    }
    this.router.navigate(['/404']);


    return false;
  }
}
